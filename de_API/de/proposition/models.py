from django.db import models
import uuid


STATUS_PROP =[
    ('1', 'proposition'),
    ('2', 'validation'),
]

class PropositionSanction(models.Model):
    uuid = models.CharField(max_length=100, null=False, default=uuid.uuid4())
    date_creation_prop = models.DateField(auto_now_add=True, null=False)
    type_prop = models.CharField(max_length=100, choices=STATUS_PROP, default="1")
    id_employe = models.CharField(max_length=100, null=False)
    id_de = models.CharField(max_length=100, null=False)
    sanction = models.CharField(max_length=100, null=False)
    description = models.CharField(max_length=1000)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ["date_creation_prop"]

    def __str__(self):
        return self.uuid