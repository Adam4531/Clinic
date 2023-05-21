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


class Employee(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    employee_image = models.ImageField(upload_to='employees/')
    employed_at = models.DateField()
    title_of_degree = models.ForeignKey(Degree, on_delete=models.DO_NOTHING)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f'{self.title_of_degree} {self.role} {self.user}'


