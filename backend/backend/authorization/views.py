import datetime
import jwt

from django.conf import settings
from django.contrib.auth import authenticate
from django.middleware import csrf
from django.shortcuts import render
from rest_framework import generics, authentication, status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .serializers import UserSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # ordering_fields = ['email']
    # filterset_fields = ['email']
    # search_fields = ['email', 'first_name', 'last_name']
    name = 'user-list'


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    name = 'user-detail'


class RegisterView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class LoginView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        data = request.data
        response = Response()
        email = data.get('email', None)
        password = data.get('password', None)

        user = authenticate(email=email, password=password)
        if user is not None:
            if user.is_active:
                data = get_tokens_for_user(user)
                response.set_cookie(settings.SIMPLE_JWT['AUTH_COOKIE'],
                                    value=data["access"],
                                    expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                                    secure=True,
                                    httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                                    samesite='None'
                                    )
                payload = {
                    'id': user.id,
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
                    'iat': datetime.datetime.utcnow()
                }

                token = jwt.encode(payload, 'secret', algorithm='HS256')
                response.set_cookie(key='jwt', value=token, httponly=True, samesite='None', secure=True)
                csrf.get_token(request)
                response.data = {"Success": "Login succesfully!", "data": data}
                return response
            else:
                return Response({"No active": "This account is not currently active!"},
                                status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"Invalid": "Invalid email or password!"}, status=status.HTTP_404_NOT_FOUND)


class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unauthenticated!")

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated!")

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)


class LogoutView(APIView):

    def post(self, request):
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('jwt')
        response.data = {
            "message": "You have been succesfully logout"
        }
        return response


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({'users': reverse(UserList.name, request=request),
                         })
