# Generated by Django 3.2.15 on 2024-04-09 15:23

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('proposition', '0024_alter_propositionsanction_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propositionsanction',
            name='uuid',
            field=models.CharField(default=uuid.UUID('f239cb77-5162-445a-bc2c-8c519e7e059c'), max_length=100),
        ),
    ]