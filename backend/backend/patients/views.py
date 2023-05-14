from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .serializers import PatientSerializer, AllergySerializer, TimeOfActivitySerializer
from .models import Patient, Allergy, Time_of_activity


class PatientList(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    # permission_classes =
    name = 'patient-list'


class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    # permission_classes =
    name = 'patient-detail'


class AllergyList(generics.ListCreateAPIView):
    queryset = Allergy.objects.all()
    serializer_class = AllergySerializer
    # permission_classes =
    name = 'allergy-list'


class AllergyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Allergy.objects.all()
    serializer_class = AllergySerializer
    # permission_classes =
    name = 'allergy-detail'


class TimeOfActivityList(generics.ListCreateAPIView):
    queryset = Time_of_activity.objects.all()
    serializer_class = TimeOfActivitySerializer
    # permission_classes =
    name = 'time_of_activity-list'


class TimeOfActivityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Time_of_activity.objects.all()
    serializer_class = TimeOfActivitySerializer
    # permission_classes =
    name = 'time_of_activity-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({'patient': reverse(PatientList.name, request=request),
                         'allergy': reverse(AllergyList.name, request=request),
                         'time_of_activity': reverse(TimeOfActivityList.name, request=request),
                         })

