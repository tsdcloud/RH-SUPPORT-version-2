from rest_framework import serializers
from .models import PropositionSanction
import datetime
import uuid

class PropositionSerializerDetail(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    id_de = serializers.CharField(read_only=True)
    id_employe = serializers.CharField(read_only=True)
    commentaire_reponse = serializers.CharField(read_only=True)
    date_init = serializers.CharField(read_only=True)
    # motif = serializers.CharField(read_only=True)
    class Meta:
        model = PropositionSanction
        fields = '__all__'


class PropositionSerializer(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    class Meta:
        model = PropositionSanction
        fields = '__all__'
    