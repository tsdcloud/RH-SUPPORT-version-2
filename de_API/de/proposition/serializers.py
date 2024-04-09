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
    type_prop = serializers.CharField(read_only=True)
    description = serializers.CharField(read_only=True)
    class Meta:
        model = PropositionSanction
        fields = '__all__'
    # def create(self, validated_data):
    #     validated_data['uuid'] = str(uuid.uuid4()) + ':' + datetime.datetime.now().strftime("%m-%d-%Y-%H-%M-%S")
        
    #     codefin = datetime.datetime.now().strftime("%m/%Y")
    #     num_ref = 1001
    #     # count = DemandeExplication.objects.filter(code_de__contains=codefin).count()
    #     validated_data['code_de'] = f"{num_ref + count}/{codefin}"
        
    #     return super().create(validated_data)