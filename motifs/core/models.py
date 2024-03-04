from django.db import models
import datetime
import uuid
from django.utils import timezone
from datetime import timedelta
import json
from . import constants as c
# Create your models here.
# Create your models here.


class Motif(models.Model):
    uuid = models.CharField(max_length=100, default=uuid.uuid4)
    entity = models.CharField(max_length=100)
    nom = models.CharField(max_length=100)
    rubrique = models.CharField(max_length=70, choices=c.RUBRIQUE_MOTIF)
    active = models.BooleanField(default=True)
    date_init = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ["nom", "date_init"]

    def __str__(self):
        return self.uuid

    def create(entity: str, nom: str, rubrique: str):
        motif = Motif()
        motif.uuid = str(uuid.uuid4()) + ':' + \
            datetime.datetime.now().strftime("%m-%d-%Y-%H-%M-%S")
        motif.entity = entity
        motif.nom = nom.lower()
        motif.rubrique = rubrique
        motif.save()
        return motif
    create = staticmethod(create)

    def read(entity: str, rubrique: str):
        motifs = Motif.objects.filter(entity=entity, rubrique=rubrique, active=True)
        res = []
        for item in motifs:
            res.append({
                "id": item.uuid,
                "nom": item.nom.upper()
            })
        return res
    read = staticmethod(read)

    def readByToken(id: str, rubrique: str):
        motif = Motif.objects.get(uuid=id, rubrique=rubrique, active=True)
        return motif
    readByToken = staticmethod(readByToken)
