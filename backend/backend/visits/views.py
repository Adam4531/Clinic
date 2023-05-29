from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .serializers import MedicineSerializer, VisitSerializer, RecommendationSerializer
from .models import Medicine, Visit, Recommendation


# class DoseList(generics.ListCreateAPIView):
#     queryset = Dose.objects.all()
#     serializer_class = DoseSerializer
#     filterset_fields = ['dose','grammage']
#     name = 'dose-list'
#
#
# class DoseDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Dose.objects.all()
#     serializer_class = DoseSerializer
#     name = 'dose-detail'


class MedicineList(generics.ListCreateAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    filterset_fields = ['name','quantity_of_tablets','doses']
    name = 'medicine-list'


class MedicineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    name = 'medicine-detail'


class VisitList(generics.ListCreateAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    filterset_fields = ['date','patient','doctor','recommendation']
    name = 'visit-list'


class VisitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    name = 'visit-detail'


class RecommendationList(generics.ListCreateAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    filterset_fields = ['prescription_code','dosage','medicines']
    name = 'recommendation-list'


class RecommendationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    name = 'recommendation-detail'


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({
                         # 'doses': reverse(DoseList.name, request=request),
                         'medicines': reverse(MedicineList.name, request=request),
                         'visits': reverse(VisitList.name, request=request),
                         'recommendations': reverse(RecommendationList.name, request=request)
                         })
