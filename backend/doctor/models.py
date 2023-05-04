from django.db import models


class Role(models.Model):
    role = models.CharField(max_length=50, unique=True)


class Degree(models.Model):
    name = models.CharField(max_length=100, unique=True)


class Employee(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    employee_image = models.ImageField(upload_to='employees/')
    employed_at = models.DateField()
    title_of_degree = models.ForeignKey(Degree, on_delete=models.CASCADE)


