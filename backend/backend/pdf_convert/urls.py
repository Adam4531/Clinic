from django.urls import path

from . import views

urlpatterns = [
    path('showvisits', views.show_visits, name='showVisits'),
    path('create-pdf', views.pdf_report_create, name='create-pdf'),
    path('showvisits/<int:id>', views.show_visits_by_id, name='showVisits-byId'),
    path('create-pdf/<int:id>', views.pdf_report_create_by_id, name='create-pdf-byId'),
]