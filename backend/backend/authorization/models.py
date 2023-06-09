from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models

from ..employees.models import Role, Degree
from ..patients.models import Allergy


class User(AbstractUser):
    #common
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    is_receptionist = models.BooleanField(blank=True, null=True, default=False)
    is_staff = models.BooleanField(blank=True, null=True, default=False)

    #employee
    class DoctorSpecializationEnum(models.TextChoices):
        Family_doctor = 'Lekarz rodzinny'
        Pediatrician = 'Pediatra'
        Dermatologist = 'Dermatolog'
        Surgeon = 'Chirurg'
        Dentist = 'Stomatolog'
        Orthopaedist = 'Ortopeda'
        Internist = 'Internista'

    employee_image = models.ImageField(upload_to='employees/', blank=True, null=True)
    employed_at = models.DateField(blank=True, null=True)
    specialization = models.CharField(max_length=15, choices=DoctorSpecializationEnum.choices, blank=True, default="")
    title_of_degree = models.ForeignKey(Degree, on_delete=models.DO_NOTHING, blank=True, null=True)
    role = models.ForeignKey(Role, on_delete=models.DO_NOTHING, blank=True, null=True)

    #patient
    pesel = models.CharField(max_length=11, unique=True, null=True, blank=True)
    phone_number = models.CharField(max_length=9, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    # allergies = models.ManyToManyField(Allergy, blank=True, null=True,)
    allergies = models.TextField(blank=True, default="")


    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()

    def __str__(self):
        return f'{self.email}'
