from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .serializers import MedicineSerializer, VisitSerializer, RecommendationSerializer
from .models import Medicine, Visit, Recommendation
from ..patients.models import Patient


class MedicineList(generics.ListCreateAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    filterset_fields = ['name', 'quantity_of_tablets', 'doses']
    name = 'medicine-list'


class MedicineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer
    name = 'medicine-detail'


class VisitList(generics.ListCreateAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    filterset_fields = ['date', 'patient', 'doctor', 'recommendation']
    name = 'visit-list'

    # def post(self, request, *args, **kwargs):
    #     patient_id = request.data.get('patient')[39:]
    #     patient = Patient.objects.get(id=patient_id)
    #     recommendation = Recommendation.objects.create(patient=patient)
    #     recommendation_serializer = RecommendationSerializer(data=recommendation)
    #
    #     if recommendation_serializer.is_valid():
    #         saved_recommendation = recommendation_serializer.save()
    #         request.data['recommendation'] = saved_recommendation
    #
    #         visit_serializer = VisitSerializer(data=request.data)
    #         if visit_serializer.is_valid():
    #             visit_serializer.save()
    #
    #             return Response({
    #             "status": status.HTTP_201_CREATED,
    #             "message": "Visit and recommendation created!"
    #             })
    #     return Response({
    #         "status": status.HTTP_422_UNPROCESSABLE_ENTITY,
    #         "message": "Visit and recommendation not created!"
    #     })

class VisitDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    name = 'visit-detail'


class RecommendationList(generics.ListCreateAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    filterset_fields = ['prescription_code', 'dosage', 'medicines']
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
