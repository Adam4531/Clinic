# Generated by Django 4.2 on 2023-06-09 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visits', '0004_remove_visit_visit_control'),
    ]

    operations = [
        migrations.AddField(
            model_name='visit',
            name='visit_control',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
