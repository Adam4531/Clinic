from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models


class User(AbstractUser):
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=255)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    is_receptionist = models.BooleanField()
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()

    def __str__(self):
        return f'{self.email}'
