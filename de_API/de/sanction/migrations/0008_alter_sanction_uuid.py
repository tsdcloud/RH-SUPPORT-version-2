# Generated by Django 3.2.15 on 2024-03-12 08:42

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('sanction', '0007_alter_sanction_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sanction',
            name='uuid',
            field=models.CharField(default=uuid.UUID('2b00cd17-d6e5-4674-89de-d836284398dc'), max_length=100),
        ),
    ]