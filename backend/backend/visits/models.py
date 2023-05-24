from django.db import models

from ..patients.models import Patient
from ..employees.models import Employee


class Dose(models.Model):
    dose = models.IntegerField(unique=True)
    grammage = models.CharField(max_length=50)

    def __str__(self):
       return f'{self.dose} {self.grammage}'


class Medicine(models.Model):
    name = models.CharField(max_length=50, unique=False)
    quantity_of_tablets = models.IntegerField()
    doses = models.ForeignKey(Dose, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} {self.quantity_of_tablets} {self.doses}'


class Visit(models.Model):
    date = models.DateTimeField(unique=True)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Employee, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    description = models.TextField()

    def __str__(self):
        return f'Visit at: {self.date}, patient: {self.patient}, doctor: {self.doctor}, description: {self.description}'


class Recommendation(models.Model):
    prescription_code = models.CharField(max_length=11)
    description = models.TextField()
    visit = models.OneToOneField(Visit, on_delete=models.CASCADE)
    dosage = models.CharField(max_length=50)
    additional_information = models.TextField()
    # medicines = models.ManyToManyField(Medicine)

    def __str__(self):
        return f'Visit:{self.visit}, Prescription: {self.prescription_code}, Medicine and dosage: {self.medicines} {self.dosage}, {self.description} {self.additional_information}'
