# Generated by Django 4.2 on 2023-06-09 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visits', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='visit',
            name='is_archieved',
            field=models.BooleanField(default=False),
        ),
    ]