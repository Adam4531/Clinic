# Generated by Django 4.2 on 2023-06-09 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('visits', '0002_recommendation_created_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='visit',
            name='is_confirmed',
        ),
    ]
