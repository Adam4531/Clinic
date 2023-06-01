from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import Role, Degree
from .serializers import RoleSerializer, DegreeSerializer
from ..authorization.models import User
from ..authorization.serializers import UserSerializer


class RoleList(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    name = 'role-list'


class RoleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    name = 'role-detail'


class DegreeList(generics.ListCreateAPIView):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    name = 'degree-list'


class DegreeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    name = 'degree-detail'


class EmployeeList(generics.ListCreateAPIView):
    queryset = User.objects.all().filter(is_staff=True)
    serializer_class = UserSerializer
    name = 'employee-list'


class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all().filter(is_staff=True)
    serializer_class = UserSerializer
    name = 'employee-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({
                         'roles': reverse(RoleList.name, request=request),
                         'degrees': reverse(DegreeList.name, request=request),
                         'employees': reverse(EmployeeList.name, request=request),
                         })
