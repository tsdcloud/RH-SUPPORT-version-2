# Generated by Django 3.2.15 on 2024-02-27 09:24

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Temoins',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.CharField(default=uuid.uuid4, max_length=100)),
                ('id_employe', models.CharField(max_length=100)),
                ('id_de', models.CharField(max_length=100)),
                ('date_init', models.DateField(auto_now_add=True, null=True)),
                ('active', models.BooleanField(default=True)),
            ],
            options={
                'ordering': ['date_init', 'uuid'],
            },
        ),
    ]
