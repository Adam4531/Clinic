from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView

from .filters import VisitFilter
from .models import Medicine, Visit, Recommendation
from .serializers import MedicineSerializer, VisitSerializer, RecommendationSerializer
from ..authorization.models import User


class MedicineList(generics.ListCreateAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    filterset_fields = ['name', 'quantity_of_tablets', 'dose']
    name = 'medicine-list'


class MedicineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    name = 'medicine-detail'


class VisitList(generics.ListCreateAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = VisitFilter
    name = 'visit-list'


class VisitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    name = 'visit-detail'


class RecommendationList(generics.ListCreateAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    filterset_fields = ['prescription_code', 'dosage', 'medicines', 'visit']
    name = 'recommendation-list'


class RecommendationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    name = 'recommendation-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({
            'medicines': reverse(MedicineList.name, request=request),
            'visits': reverse(VisitList.name, request=request),
            'recommendations': reverse(RecommendationList.name, request=request)
        })
