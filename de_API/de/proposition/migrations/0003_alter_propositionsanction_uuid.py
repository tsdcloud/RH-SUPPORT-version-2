# Generated by Django 3.2.15 on 2024-03-12 08:42

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('proposition', '0002_alter_propositionsanction_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propositionsanction',
            name='uuid',
            field=models.CharField(default=uuid.UUID('3973f247-c5ed-4c8c-8df3-71f1fc34dc06'), max_length=100),
        ),
    ]