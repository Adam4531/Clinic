from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import Patient, Allergy, Time_of_activity
from .serializers import PatientSerializer, AllergySerializer, TimeOfActivitySerializer
from ..authorization.models import User
from ..authorization.serializers import UserSerializer


class PatientList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filterset_fields = ['user', 'age', 'phone_number', 'allergies', 'age', 'pesel']
    name = 'patient-list'


class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all().filter(is_staff=False)
    serializer_class = UserSerializer
    name = 'patient-detail'


class AllergyList(generics.ListCreateAPIView):
    queryset = Allergy.objects.all()
    serializer_class = AllergySerializer
    filterset_fields = ['name', 'time_of_activity']
    name = 'allergy-list'


class AllergyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Allergy.objects.all()
    serializer_class = AllergySerializer
    name = 'allergy-detail'


class TimeOfActivityList(generics.ListCreateAPIView):
    queryset = Time_of_activity.objects.all()
    serializer_class = TimeOfActivitySerializer
    filterset_fields = ['date_start', 'date_end']
    name = 'time_of_activity-list'


class TimeOfActivityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Time_of_activity.objects.all()
    serializer_class = TimeOfActivitySerializer
    name = 'time_of_activity-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({'patient': reverse(PatientList.name, request=request),
                         'allergy': reverse(AllergyList.name, request=request),
                         'time_of_activity': reverse(TimeOfActivityList.name, request=request),
                         })
