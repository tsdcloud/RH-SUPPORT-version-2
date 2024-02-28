from django.db import models
import uuid
from .constances import DE_RESPONSE_STATUT, DE_RESPONSE_TYPE
# Create your models here.
class Reponse(models.Model):
    uuid = models.CharField(max_length=1000, default=uuid.uuid4)
    id_de = models.CharField(max_length=1000, null=False)
    id_employe = models.CharField(max_length=1000, null=False)
    commentaire_reponse = models.CharField(max_length=1000, null=False)
    date_init = models.DateField(auto_now_add=True, blank=False, null=False)
    # statut_reponse = models.CharField(max_length=20, choices=DE_RESPONSE_STATUT, default='3', blank=False, null=False)
    # type_reponse = models.CharField(max_length=20, choices=DE_RESPONSE_TYPE)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ["date_init"]

    def __str__(self):
        return self.uuid