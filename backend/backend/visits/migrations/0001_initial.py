# Generated by Django 4.1.7 on 2023-06-02 16:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Medicine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('quantity_of_tablets', models.IntegerField()),
                ('dose', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Recommendation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prescription_code', models.CharField(blank=True, default='', max_length=11)),
                ('description', models.TextField(blank=True, default='')),
                ('dosage', models.CharField(blank=True, default='', max_length=50)),
                ('additional_information', models.TextField(blank=True, default='')),
                ('medicines', models.ManyToManyField(blank=True, to='visits.medicine')),
                ('patient', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Visit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(unique=True)),
                ('time', models.TimeField(unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('description', models.TextField(blank=True, default='')),
                ('is_confirmed', models.BooleanField(default=False)),
                ('doctor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='visit_doctor', to=settings.AUTH_USER_MODEL)),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='visit_patient', to=settings.AUTH_USER_MODEL)),
                ('recommendation', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='visits.recommendation')),
            ],
        ),
    ]
