from django.db import models


class Time_of_activity(models.Model):
    date_start = models.DateField()
    date_end = models.DateField()

    def __str__(self):
        return f'{self.date_start} - {self.date_end}'


class Allergy(models.Model):
    name = models.CharField(max_length=45, unique=True)
    time_of_activity = models.ForeignKey(Time_of_activity, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.name}, {self.time_of_activity}'
