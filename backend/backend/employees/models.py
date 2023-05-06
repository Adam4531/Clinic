from django.db import models


class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f'{self.name}'


class Degree(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return f'{self.name}'


class Employee(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=255)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    employee_image = models.ImageField(upload_to='employees/')
    employed_at = models.DateField()
    title_of_degree = models.ForeignKey(Degree, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f'{self.title_of_degree} {self.role} {self.first_name} {self.last_name}'


