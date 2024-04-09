from rest_framework import serializers
from rest_framework.exceptions import APIException                                                  
from .models import Temoin
import datetime
import uuid

class TemoinsSerializerDetail(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    # motif = serializers.CharField(read_only =True)
    class Meta:
        model = Temoin
        fields = '__all__'
    
    def create(self, validated_data):
        """
        Overrides the default create method to handle saving multiple employees.
        """
        # Get the list of employees from the request data
        employees = self.context.get('list_of_employees')

        if not employees:
            raise APIException(
                detail="No list of employees provided", code=status.HTTP_400_BAD_REQUEST
            )

        saved_employees = []
        for employee in employees:
            # Create a serializer for each employee and save it
            serializer = TemoinsSerializer(data=employee)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            saved_employees.append(serializer.data)

        return saved_employees


class TemoinsSerializer(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    class Meta:
        model = Temoin
        fields = '__all__'
    