from django.urls import path

from . import views

urlpatterns = [
    path('showvisits', views.show_visits, name='showVisits'),
    path('create-pdf', views.pdf_report_create, name='create-pdf'),
]