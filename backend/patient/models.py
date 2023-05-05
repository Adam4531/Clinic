from django.db import models

class Patient(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
    pesel = models.CharField(max_length=11)
    phone_number = models.CharField(max_length=11)
    age = models.IntegerField()