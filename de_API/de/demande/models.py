from django.db import models
import requests
from .constances import getMotifs, getEntities, STATUT_DE_CHOICE, DE_RESPONSE_STATUT, DE_RESPONSE_TYPE, STATUS_PROP, getMotifDetail
import datetime
import uuid
from django.utils import timezone
from datetime import timedelta


# Create your models here.


class DemandeExplication(models.Model):
    uuid = models.CharField(max_length=100, null=False, default=uuid.uuid4)
    code_de = models.CharField(max_length=100, null=False)
    employer_initiateur = models.CharField(max_length=100, null=False)
    employer_recepteur = models.CharField(max_length=100, null=False)
    description = models.CharField(max_length=2550, null=False)
    motif = models.CharField(max_length=100, null=False)
    date_init = models.DateField(blank=False, auto_now_add=True, null=False)
    date_response = models.DateField(null=True)
    date_validation = models.DateField(blank=True, auto_now_add=False, null=True)
    date_archivage = models.DateField(null=True)
    statut_de = models.CharField(default="1", max_length=20, choices=STATUT_DE_CHOICE, null=False)
    active = models.BooleanField(default=True, null=False)

    class Meta:
        ordering = ["statut_de", "date_init"]

    def __str__(self):
        return self.uuid
