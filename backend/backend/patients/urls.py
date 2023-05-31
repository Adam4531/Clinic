from django.urls import path
from . import views

urlpatterns = [
    path('patient', views.PatientList.as_view(), name=views.PatientList.name),
    path('patient/<int:pk>', views.PatientDetail.as_view(), name=views.PatientDetail.name),
    path('allergy', views.AllergyList.as_view(), name=views.AllergyList.name),
    path('allergy/<int:pk>', views.AllergyDetail.as_view(), name=views.AllergyDetail.name),
    path('timeOfActivity', views.TimeOfActivityList.as_view(), name=views.TimeOfActivityList.name),
    path('timeOfActivity/<int:pk>', views.TimeOfActivityDetail.as_view(), name=views.TimeOfActivityDetail.name),
    path('', views.ApiRoot.as_view(), name=views.ApiRoot.name)
]