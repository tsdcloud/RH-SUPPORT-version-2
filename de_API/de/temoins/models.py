from django.db import models
import uuid
# Create your models here.

class Temoin(models.Model):
    uuid = models.CharField(max_length=100, default=uuid.uuid4)
    id_employe = models.CharField(max_length=100)
    id_de = models.CharField(max_length=100)
    date_init = models.DateField(auto_now_add=True, null=True)
    active = models.BooleanField(default=True)
   
    class Meta:
        ordering = ["date_init", "uuid"]

    def __str__(self):
        return self.uuid
