from django.shortcuts import render
from rest_framework import generics


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    ordering_fields = ['email']
    filter_fields = ['email']
    search_fields = ['email','first_name','last_name']
    name = 'user-list'
