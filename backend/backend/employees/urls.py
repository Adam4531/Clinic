from django.urls import path
from . import views

urlpatterns = [
    path('employees', views.EmployeeList.as_view(), name=views.EmployeeList.name),
    path('employees/<int:pk>', views.EmployeeDetail.as_view(), name=views.EmployeeDetail.name),
    # path('roles', views.RoleList.as_view(), name=views.RoleList.name),
    # path('roles/<int:pk>', views.RoleDetail.as_view(), name=views.RoleDetail.name),
    # path('degrees', views.DegreeList.as_view(), name=views.DegreeList.name),
    # path('degrees/<int:pk>', views.DegreeDetail.as_view(), name=views.DegreeDetail.name),
    path('', views.ApiRoot.as_view(), name=views.ApiRoot.name)
]
