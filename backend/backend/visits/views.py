from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .serializers import DoseSerializer, MedicineSerializer, VisitSerializer, RecommendationSerializer
from .models import Dose, Medicine, Visit, Recommendation


class DoseList(generics.ListCreateAPIView):
    queryset = Dose.objects.all()
    serializer_class = DoseSerializer
    # permission_classes =
    name = 'dose-list'


class DoseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dose.objects.all()
    serializer_class = DoseSerializer
    # permission_classes =
    name = 'dose-detail'


class MedicineList(generics.ListCreateAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    # permission_classes =
    name = 'medicine-list'


class MedicineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    # permission_classes =
    name = 'medicine-detail'


class VisitList(generics.ListCreateAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    # permission_classes =
    name = 'visits-list'


class VisitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    # permission_classes =
    name = 'visits-detail'


class RecommendationList(generics.ListCreateAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    # permission_classes =
    name = 'recommendation-list'


class RecommendationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    # permission_classes =
    name = 'recommendation-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({'doses': reverse(DoseList.name, request=request),
                         'medicines': reverse(MedicineList.name, request=request),
                         'visits': reverse(VisitList.name, request=request),
                         'recommendations': reverse(RecommendationList.name, request=request)
                         })
