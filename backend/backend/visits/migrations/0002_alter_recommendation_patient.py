# Generated by Django 4.2 on 2023-06-01 07:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0001_initial'),
        ('visits', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recommendation',
            name='patient',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='patients.patient'),
        ),
    ]