from rest_framework import serializers
from .models import Sanction
import datetime
import uuid

class SanctionSerializerDetail(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    # motif = serializers.CharField(read_only=True)
    class Meta:
        model = Sanction
        fields = '__all__'


class SanctionSerializer(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    class Meta:
        model = Sanction
        fields = '__all__'
    