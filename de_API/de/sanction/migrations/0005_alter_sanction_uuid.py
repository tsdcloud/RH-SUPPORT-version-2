# Generated by Django 3.2.15 on 2024-03-12 08:42

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('sanction', '0004_alter_sanction_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sanction',
            name='uuid',
            field=models.CharField(default=uuid.UUID('5a5cbf3f-beeb-42f3-be03-bcf1a1915217'), max_length=100),
        ),
    ]
