from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import Http404
from .serializers import ResponseSerializer, ResponseSerializerDetail
from .models import Reponse
import requests, os
from datetime import datetime

class ResponseListView(APIView):
    """
    List all Response, Create a new Response, Update a Response and Delete a Response
    """
    def get(self, request,  format=None):
        response = Reponse.objects.all()
        serializer = ResponseSerializer(response, many=True)
        return Response(serializer.data)
    

    def post(self, request, format=None):
        serializer = ResponseSerializer(data=request.data, many=False, context={'request': request})
        if serializer.is_valid():
            id_de = request.data.get('id_de', None)

            if id_de:
                demande_url = f"{os.environ.get('DE_API')}/demande/{id_de}"
                demande_response = requests.get(demande_url)

                if demande_response.status_code == 200:
                    demande_data = demande_response.json()
                    response_demande = serializer.save()

                    try:
                        # Parse dates using isoformat() for consistency
                        demande_init = datetime.fromisoformat(demande_data['date_init'])
                        response_init = datetime.fromisoformat(str(response_demande.date_init))
                        delta = response_init - demande_init
                    except (ValueError, KeyError):
                        # Handle potential parsing errors or missing keys gracefully
                        print("Error parsing dates or missing key 'date_init'")
                        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                    
                    if delta.days > 3:
                        status_de = 5
                    elif delta.days <=3:
                        status_de = 2

                    update_data = {
                        "id": demande_data['id'],
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
    

class ResponseDetail(APIView):
    """
    Get Response by Id, Update Response, Delete Response
    """
    def get_object(self, pk):
        try:
            reponse = Reponse.objects.filter(id_de=pk, active=True)
            print(reponse)
            return reponse
        except Reponse.DoesNotExist:
            return []
        

    def get(self, request, pk,  format=None):
        # reponse = self.get_object(pk)
        reponse = Reponse.objects.filter(id_de=pk, active=True)
        # return Response(ResponseSerializerDetail(reponse, many=True).data)
        print("REPONSE :", reponse)
        serializer = ResponseSerializerDetail(reponse, many=True)
        return Response(serializer.data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def put(self, request, pk, format=None):
        reponse = self.get_object(pk)
        serializer = ResponseSerializer(reponse, data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def delete(self, request, pk, format=None):
        reponse = self.get_object(pk)
        reponse.active = False
        reponse.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
