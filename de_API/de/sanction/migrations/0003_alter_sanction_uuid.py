# Generated by Django 3.2.15 on 2024-02-27 14:09

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('sanction', '0002_alter_sanction_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sanction',
            name='uuid',
            field=models.CharField(default=uuid.UUID('8fd4aeca-6271-4ee1-ae08-3f3dc4ca7944'), max_length=100),
        ),
    ]
