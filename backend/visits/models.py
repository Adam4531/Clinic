from django.db import models

from backend.employees.models import Employee
from backend.patient.models import Patient


class Dose(models.Model):
    dose = models.IntegerField()
    grammage = models.CharField(max_length=50)


class Medicine(models.Model):
    name = models.CharField(max_length=50, unique=True)
    quantity_of_tablets = models.IntegerField()
    doses = models.ForeignKey(Dose, on_delete=models.CASCADE)  # TODO check if its better to do that as OneToMany relation or as ManyToMany


class Visit(models.Model):
    date = models.DateTimeField(unique=True)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField()
    description = models.TextField()


class Recommendation(models.Model):
    prescription_code = models.CharField(max_length=11)
    description = models.TextField()
    visit = models.OneToOneField(Visit, on_delete=models.CASCADE)
    dosage = models.CharField(max_length=50)
    additional_information = models.TextField()
    medicines = models.ManyToManyField(Medicine)
