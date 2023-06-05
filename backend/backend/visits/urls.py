from django.urls import path
from . import views

urlpatterns = [
    path('visits', views.VisitList.as_view(), name=views.VisitList.name),
    path('visits/<int:pk>', views.VisitDetail.as_view(), name=views.VisitDetail.name),
    path('recomendations', views.RecommendationList.as_view(), name=views.RecommendationList.name),
    path('recomendations/<int:pk>', views.RecommendationDetail.as_view(), name=views.RecommendationDetail.name),
    path('medicines', views.MedicineList.as_view(), name=views.MedicineList.name),
    path('medicines/<int:pk>', views.MedicineDetail.as_view(), name=views.MedicineDetail.name),
    path('', views.ApiRoot.as_view(), name=views.ApiRoot.name),
    path('user-medicine/<int:id>', views.MedicinesByUser.as_view(), name='user-medicine')
]
