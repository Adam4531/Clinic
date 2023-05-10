from django.db import models

# Create your models here.


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


class Patient(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
    pesel = models.CharField(max_length=11, unique=True)
    phone_number = models.CharField(max_length=11, unique=True)
    age = models.IntegerField()
    alergies = models.ManyToManyField(Allergy)

    def __str__(self):
        return f'{self.first_name}, {self.last_name}, {self.email}, {self.phone_number}, {self.age}'

