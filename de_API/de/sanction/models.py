from django.db import models
import uuid
# Create your models here.

class Sanction(models.Model):
    uuid = models.CharField(max_length=100, default=uuid.uuid4())
    libelle_sanction = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    id_entity = models.CharField(max_length=1000)
    active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ["libelle_sanction", "description", "uuid"]

    def __str__(self):
        return self.uuid