from rest_framework import serializers
from .models import Sanction, MotifSanction
import datetime
import uuid


class MotifsSanctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotifSanction
        fields = '__all__'

class MotifsSanctionSerializerDetail(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    # motif = serializers.CharField(read_only=True)
    class Meta:
        model = MotifSanction
        fields = '__all__'

class SanctionSerializerDetail(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    motifs = MotifsSanctionSerializer(source='motifsanction_set', many=True, read_only=True)
    class Meta:
        model = Sanction
        fields = '__all__'  # Adjust fields as needed


class SanctionSerializer(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    motifs = serializers.ListField(child=serializers.DictField(), read_only=True)
    class Meta:
        model = Sanction
        fields = '__all__'


# class MotifsSanctionSerializer(serializers.ModelSerializer):
#     # uuid = serializers.CharField(read_only=True, required=False)
#     class Meta:
#         model = MotifSanction
#         fields = '__all__'
    