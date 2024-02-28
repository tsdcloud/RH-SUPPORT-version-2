from rest_framework import serializers
from . import models


class MotifSerializer(serializers.HyperlinkedModelSerializer):

    uuid = serializers.CharField(read_only=True)

    class Meta:
        model = models.Motif
        fields = ('uuid', 'nom', 'rubrique', 'entity')