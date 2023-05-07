from django.db import models

# Create your models here.
class Time_of_activities(models.Model):
    date_start = models.DateField()
    date_end = models.DateField()


class Alegries(models.Model):
    name = models.CharField(max_length=45)
    time_of_activity = models.ForeignKey(Time_of_activities, on_delete=models.CASCADE)


class Patients(models.Model):
    first_name = models.CharField(max_length=50)
    second_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=255)
    pesel = models.CharField(max_length=11)
    phone_number = models.CharField(max_length=11)
    age = models.IntegerField()
    alergies = models.ManyToManyField(Alegries)








