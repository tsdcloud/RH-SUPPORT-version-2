# Generated by Django 3.2.15 on 2024-02-26 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reponse', '0002_rename_response_reponse'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reponse',
            name='id_de',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='reponse',
            name='id_employe',
            field=models.CharField(max_length=1000),
        ),
    ]
