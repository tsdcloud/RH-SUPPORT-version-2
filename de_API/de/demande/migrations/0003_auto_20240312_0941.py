# Generated by Django 3.2.15 on 2024-03-12 08:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('demande', '0002_auto_20240226_1026'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='demandeexplication',
            name='date_archivage',
        ),
        migrations.RemoveField(
            model_name='demandeexplication',
            name='date_response',
        ),
        migrations.RemoveField(
            model_name='demandeexplication',
            name='date_validation',
        ),
    ]