# Generated by Django 3.2.15 on 2024-02-27 14:00

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('sanction', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sanction',
            name='uuid',
            field=models.CharField(default=uuid.UUID('c3716965-0bbb-4150-b719-8c86f77acec6'), max_length=100),
        ),
    ]
