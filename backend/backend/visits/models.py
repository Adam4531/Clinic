from django.db import models

from ..authorization.models import User


class Visit(models.Model):
    date = models.DateTimeField(unique=True)
    patient = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name="visits")
    doctor = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name="visits_doctor", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    description = models.TextField(blank=True, default='')
    is_confirmed = models.BooleanField(default=False)
    visit_control = models.DateTimeField(blank=True, null=True,)
    is_archieved = models.BooleanField(default=False)

    def __str__(self):
        return f'Visit at: {self.date}, patient: {self.patient}, doctor: {self.doctor}, description: {self.description}'


class Medicine(models.Model):
    name = models.CharField(max_length=50, unique=False)
    quantity_of_tablets = models.IntegerField()
    dose = models.CharField(max_length=100)
    patient = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True, related_name='medicines')

    def __str__(self):
        return f'{self.name} {self.quantity_of_tablets} {self.dose}, {self.patient}'


class Recommendation(models.Model):
    prescription_code = models.CharField(max_length=11, blank=True, default='')
    description = models.TextField(blank=True, default='')
    dosage = models.CharField(max_length=50, blank=True, default='')
    additional_information = models.TextField(blank=True, default='')
    doctor = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    patient = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True, related_name='recommendations')
    visit = models.OneToOneField(Visit, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return f'Prescription: {self.prescription_code}, Medicine and dosage: {self.dosage}, {self.description} {self.additional_information}'
