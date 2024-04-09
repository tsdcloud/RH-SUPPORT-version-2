# Generated by Django 3.2.15 on 2024-03-27 14:03

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_motif_rubrique'),
    ]

    operations = [
        migrations.CreateModel(
            name='MotifSanction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.CharField(default=uuid.uuid4, max_length=100)),
                ('motif_id', models.CharField(max_length=100)),
                ('sanction_id', models.CharField(max_length=100)),
            ],
        ),
        migrations.AlterField(
            model_name='motif',
            name='uuid',
            field=models.CharField(default=uuid.uuid4, max_length=100),
        ),
    ]