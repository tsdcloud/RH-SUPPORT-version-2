# Generated by Django 3.2.15 on 2024-04-04 11:23

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('proposition', '0019_alter_propositionsanction_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propositionsanction',
            name='uuid',
            field=models.CharField(default=uuid.UUID('4b735a99-fe80-414c-99b8-d53d6168978a'), max_length=100),
        ),
    ]