from rest_framework import serializers
from . import models
from .models import DemandeExplication
import datetime
import uuid


class DemandeSerializerDetail(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    code_de = serializers.CharField(read_only=True)
    employer_initiateur = serializers.CharField(read_only=True)
    employer_recepteur = serializers.CharField(read_only=True)
    description = serializers.CharField(read_only=True)
    motif = serializers.CharField(read_only=True)
    reponse = serializers.ListField(child=serializers.DictField(), read_only=True)
    temoins = serializers.ListField(child=serializers.DictField(), read_only=True)
    propositions = serializers.ListField(child=serializers.DictField(), read_only=True)
    class Meta:
        model = models.DemandeExplication
        fields = '__all__'
    
class DemandeExplicationSerializer(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    code_de = serializers.CharField(read_only=True)

    class Meta:
        model = DemandeExplication
        fields = '__all__'

    def create(self, validated_data):
        validated_data['uuid'] = str(uuid.uuid4()) + ':' + datetime.datetime.now().strftime("%m-%d-%Y-%H-%M-%S")
        
        codefin = datetime.datetime.now().strftime("%m/%Y")
        num_ref = 1001
        count = DemandeExplication.objects.filter(code_de__contains=codefin).count()
        validated_data['code_de'] = f"{num_ref + count}/{codefin}"
        
        return super().create(validated_data)