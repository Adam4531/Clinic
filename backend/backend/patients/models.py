from django.db import models

from ..authorization.models import User


class Time_of_activity(models.Model):
    date_start = models.DateField()
    date_end = models.DateField()

    def __str__(self):
        return f'{self.date_start} - {self.date_end}'


class Allergy(models.Model):
    name = models.CharField(max_length=45, unique=True)
    time_of_activity = models.ForeignKey(Time_of_activity, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}, {self.time_of_activity}'


# class Patient(models.Model):
#     pesel = models.CharField(max_length=11, unique=True)
#     phone_number = models.CharField(max_length=11, unique=True)
#     age = models.IntegerField()
#     allergies = models.ManyToManyField(Allergy, blank=True, null=True)
#     user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
#
#     def __str__(self):
#         return f'{self.user}, {self.phone_number}, {self.age}'

