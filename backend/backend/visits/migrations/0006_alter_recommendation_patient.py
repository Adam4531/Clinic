# Generated by Django 4.2 on 2023-05-30 15:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0003_rename_alergies_patient_allergies_alter_patient_user'),
        ('visits', '0005_remove_medicine_doses_medicine_dose_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recommendation',
            name='patient',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='patients.patient'),
        ),
    ]
