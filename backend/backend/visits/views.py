from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView

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
    filterset_fields = ['date', 'patient', 'doctor']
    name = 'visit-list'

    # def post(self, request, *args, **kwargs): #TODO
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
    filterset_fields = ['prescription_code', 'dosage', 'medicines', 'visit']
    name = 'recommendation-list'


class RecommendationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    name = 'recommendation-detail'


class MedicinesByUser(APIView): #TODO

    def get(self, request, id):
        user = User.objects.get(pk=id)
        # response = User.objects.select_related('medicines__recommendation')
        response = Medicine.objects.select_related('recommendation__patient').filter(recommendation__patient__email=user.email)

        return Response(response)


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response({
            'medicines': reverse(MedicineList.name, request=request),
            'visits': reverse(VisitList.name, request=request),
            'recommendations': reverse(RecommendationList.name, request=request)
        })
