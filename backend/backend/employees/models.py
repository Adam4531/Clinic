from django.db import models

from ..authorization.models import User


class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f'{self.name}'


class Degree(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return f'{self.name}'


# class Employee(models.Model):
#
#     class DoctorSpecializationEnum(models.TextChoices):
#         Family_doctor = 'Lekarz rodzinny'
#         Pediatrician = 'Pediatra'
#         Dermatologist = 'Dermatolog'
#         Surgeon = 'Chirurg'
#         Dentist = 'Stomatolog'
#         Orthopaedist = 'Ortopeda'
#         Internist = 'Internista'
#
#     employee_image = models.ImageField(upload_to='employees/')
#     employed_at = models.DateField()
#     user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
#     specialization = models.CharField(max_length=15, choices=DoctorSpecializationEnum.choices, blank=True, default="")
#     title_of_degree = models.ForeignKey(Degree, on_delete=models.DO_NOTHING, blank=True, null=True)
#     role = models.ForeignKey(Role, on_delete=models.DO_NOTHING, blank=True, null=True)
#     # title_of_degree = models.CharField(max_length=100, blank=True, null=True)
#     # role = models.CharField(max_length=13, choices=Role.choices, default=Role.Doctor, )
#
#     def __str__(self):
#         return f'{self.title_of_degree} {self.role} {self.user}'


