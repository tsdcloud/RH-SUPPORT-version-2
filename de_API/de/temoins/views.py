from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import Http404
from .serializers import TemoinsSerializer, TemoinsSerializerDetail
from .models import Temoin
import requests
from datetime import datetime
import os


class TemoinsListView(APIView):
    """
    List all Response, Create a new Response, Update a Response and Delete a Response
    """
    def get(self, request,  format=None):
        response = Temoin.objects.all()
        serializer = TemoinsSerializer(response, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = TemoinsSerializer(data=request.data, many=False, context={'request': request})
        if serializer.is_valid():

            id_de = request.data.get('id_de', None)

            if id_de:
                demande_url = f"{os.environ.get('DE_API')}/demande/{id_de}"
                demande_response = requests.get(demande_url)

                if demande_response.status_code == 200:
                    demande_data = demande_response.json()
                    response_demande = serializer.save()
                    status_de = 3

                    update_data = {
                        "id": demande_data['id'],
                        'user_id':demande_data['user_id'],
                        "uuid": demande_data['uuid'],
                        "code_de": demande_data['code_de'],
                        "employer_initiateur": demande_data['employer_initiateur'],
                        "employer_recepteur": demande_data['employer_recepteur'],
                        "description": demande_data['description'],
                        "motif": demande_data['motif'],
                        "date_init": demande_data['date_init'],
                        "statut_de": status_de,
                        "active": True
                    }
                    update_response = requests.put(demande_url, data=update_data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class TemoinsDetail(APIView):
    """
    Get Response by Id, Update Response, Delete Response
    """
    def get_object(self, pk):
        try:
            motif = Temoin.objects.get(id_de=pk)
            return motif
        except Temoin.DoesNotExist:
            raise Http404
        

    def get(self, request, pk,  format=None):
        response = self.get_object(pk)
        serializer = TemoinsSerializerDetail(response, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def put(self, request, pk, format=None):
        response = self.get_object(pk)
        serializer = TemoinsSerializer(response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        response = self.get_object(pk)
        response.active = False
        response.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
