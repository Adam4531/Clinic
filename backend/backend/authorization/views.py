import datetime

import jwt
from django.conf import settings
from django.contrib.auth import authenticate
from django.middleware import csrf
from rest_framework import generics, status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .serializers import UserSerializer


class UserList(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filterset_fields = ['email', 'is_staff', 'is_receptionist']
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
                                    httponly=False,
                                    samesite='None'
                                    )
                payload = {
                    'id': user.id,
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
                    'iat': datetime.datetime.utcnow()
                }

                token = jwt.encode(payload, 'secret', algorithm='HS256')
                response.set_cookie(key='jwt', value=token, httponly=False, samesite='None', secure=True)
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


class ChangePasswordView(APIView):

    def put(self, request):
        request_email = request.data['email']
        request_password = request.data['password']
        user = authenticate(email=request_email, password=request_password)

        new_password = request.data['new_password']
        new_password2 = request.data['new_password2']

        if not user.check_password(new_password):
            if new_password == new_password2:
                user.set_password(new_password)
                user.save()
                return Response({
                    "status": status.HTTP_202_ACCEPTED,
                    "message": "Password has been updated!"
                })
            else:
                return Response({
                    "status": status.HTTP_422_UNPROCESSABLE_ENTITY,
                    "message": "New passwords are not the same"
                })
        return Response({
            "status": status.HTTP_422_UNPROCESSABLE_ENTITY,
            "message": "Current password is not the same as given"
        })


class AccountDeactivationView(APIView):
    def put(self, request):
        request_email = request.data['email']
        request_first_name = request.data['first_name']
        request_last_name = request.data['last_name']
        request_password = request.data['password']

        user = authenticate(email=request_email, password=request_password)
        if user is None:
            return Response({
                "status": status.HTTP_422_UNPROCESSABLE_ENTITY,
                "message": "Wrong password or email!"
            })

        if user.check_password(request_password):
            if user.first_name == request_first_name:
                if user.last_name == request_last_name:
                    user.is_active = False
                    user.save()
                    return Response({
                        "status": status.HTTP_200_OK,
                        "message": "User has been deactivated"
                    })
                else:
                    return Response({
                        "status": status.HTTP_422_UNPROCESSABLE_ENTITY,
                        "message": "Last name is not equal to given last name"
                    })
            else:
                return Response({
                    "status": status.HTTP_422_UNPROCESSABLE_ENTITY,
                    "message": "First name is not equal to given first name"
                })

        return Response({
                    "status": status.HTTP_422_UNPROCESSABLE_ENTITY,
                    "message": "Current password is not equal to given password"
                })


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({'users': reverse(UserList.name, request=request),
                         })
