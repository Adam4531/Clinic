from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import Role, Degree, Employee
from .serializers import RoleSerializer, DegreeSerializer, EmployeeSerializer


class RoleList(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    # permission_classes =
    name = 'role-list'


class RoleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    # permission_classes =
    name = 'role-detail'


class DegreeList(generics.ListCreateAPIView):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    # permission_classes =
    name = 'degree-list'


class DegreeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Degree.objects.all()
    serializer_class = DegreeSerializer
    # permission_classes =
    name = 'degree-detail'


class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    # permission_classes =
    name = 'employee-list'


class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    # permission_classes =
    name = 'employee-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({'roles': reverse(RoleList.name, request=request),
                         'degrees': reverse(DegreeList.name, request=request),
                         'employees': reverse(EmployeeList.name, request=request),
                         })
