# Generated by Django 3.2.15 on 2024-03-15 10:40

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('sanction', '0010_alter_sanction_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sanction',
            name='uuid',
            field=models.CharField(default=uuid.UUID('6048078a-0a8d-47bc-a9f4-438e7388b5a8'), max_length=100),
        ),
    ]
