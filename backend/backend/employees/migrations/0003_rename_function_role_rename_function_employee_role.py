# Generated by Django 4.2 on 2023-05-21 16:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0002_rename_role_function_rename_role_employee_function_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Function',
            new_name='Role',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='function',
            new_name='role',
        ),
    ]