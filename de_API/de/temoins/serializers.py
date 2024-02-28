from rest_framework import serializers
from .models import Temoins
import datetime
import uuid

class TemoinsSerializerDetail(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    # motif = serializers.CharField(read_only=True)
    class Meta:
        model = Temoins
        fields = '__all__'


class TemoinsSerializer(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    class Meta:
        model = Temoins
        fields = '__all__'
    