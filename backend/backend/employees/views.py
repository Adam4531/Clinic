from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import Role, Degree, Employee
from .serializers import RoleSerializer, DegreeSerializer, EmployeeSerializer


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
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    name = 'employee-list'


class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    name = 'employee-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({'roles': reverse(RoleList.name, request=request),
                         'degrees': reverse(DegreeList.name, request=request),
                         'employees': reverse(EmployeeList.name, request=request),
                         })
