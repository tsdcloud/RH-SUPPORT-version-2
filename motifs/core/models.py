from django.db import models
import uuid
from . import constants as c

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
