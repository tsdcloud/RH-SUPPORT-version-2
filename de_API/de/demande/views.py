import datetime
import json
from .constances import getUser
from rest_framework.views import APIView, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .authentication import BearerAuthentication
from django.http import Http404
from .serializers import DemandeSerializerDetail, DemandeExplicationSerializer
from .models import DemandeExplication
import requests, os
from requests import exceptions
from dotenv import load_dotenv
load_dotenv()

class DemandeListView(APIView):
    """
    List all Explanation requests, Create a new EXplanation request, Update a Explanation request and Delete a Explanation request
    """
    # permission_classes = [IsAuthenticated]  # Enforce authentication
    # authentication_classes = [BearerAuthentication]  # Use Bearer authentication

    def get(self, request, format=None):
        demandes = DemandeExplication.objects.filter(active=True)
        serializer = DemandeExplicationSerializer(demandes, many=True)
        return Response(serializer.data)
    
    # def get(self, request,  format=None):
    #     demandes = DemandeExplication.objects.filter(active=True)
    #     demande_list = []
    #     for demande in demandes:
    #         headers = {'Content-Type': 'application/json'}
    #         reponse = requests.request("GET", str(os.environ.get("DE_API"))+"/reponse/"+demande.uuid)
    #         demande_1 = dict()
    #         for key in DemandeExplication._meta.fields:
    #             try:
    #                 demande_1[key.attname] = getattr(demande, key.attname)
    #             except KeyError:
    #                 pass
    #         if reponse == {}:
    #             demande_1["reponse"]= []
    #         else:
    #             demande_1["reponse"]= reponse
    #         demande_list.append(demande_1)
    #     return Response(demande_list)
    
    # def post(self, request, format=None):
    #     serializer = DemandeExplicationSerializer(data=request.data, many=False, context={'request': request})
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, format=None):
        serializer = DemandeExplicationSerializer(data=request.data, many=False, context={'request': request})
        if serializer.is_valid():
            # Retrieve Bearer token from headers
            # header = request.headers.get('Authorization', None)
            # if not header or not header.startswith('Bearer'):
            #     return Response({'error': 'Missing or invalid Bearer token'}, status=status.HTTP_401_UNAUTHORIZED)

            # token = header.split(' ')[1]

            # Verify token with USER API (replace with your API endpoint)
            # verification_url = 'https://bfc.api.entity.zukulufeg.com/users/account'
            # try:
            #     response = requests.get(verification_url)
            #     response.raise_for_status()  # Raise exception for non-200 status codes
            #     user_data = response.json()
            # except exceptions.RequestException as e:
            #     return Response({'error': 'Error verifying token: ' + str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            # Extract email from user data
            # if 'email' not in user_data:
            #     return Response({'error': 'Email not found in user data'}, status=status.HTTP_400_BAD_REQUEST)

            # email = user_data['email']

            # Save Explanation request (assuming you have a post-save signal or similar logic)
            explanation = serializer.save()

            # Send email using your preferred email sending functionality
            # send_email(email, explanation)  # Replace with your email sending logic

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DemandeExplicationDetail(APIView):
    """
    Get Demande Explication by Id, Update Demande Explication, Delete Demande Explication
    """
    def get_object(self, pk):
        try:
            demande = DemandeExplication.objects.get(uuid=pk, active=True)
            return demande
        except DemandeExplication.DoesNotExist:
            raise Http404
        
    def get(self, request, pk,  format=None):
        demande = self.get_object(pk)

        reponse = requests.get(str(os.environ.get("DE_API")) + "/reponse/" + demande.uuid)
        temoins = requests.get(str(os.environ.get("DE_API")) + "/temoins/" + demande.uuid)
        proposition = requests.get(str(os.environ.get("DE_API")) + "/proposition/" + demande.uuid)
        
        if reponse.status_code == 200:
            reponse_data = reponse.json()
            demande.reponse = reponse_data
        else:
            demande.reponse = [] 

        
        if temoins.status_code == 200:
            temoins_data = temoins.json()
            demande.temoins = temoins_data
        else:
            demande.temoins = [] 


        if proposition.status_code == 200:
            proposition_data = proposition.json()
            demande.propositions = proposition_data
        else:
            demande.propositions = []
        serializer = DemandeSerializerDetail(demande, data=request.data, many=False, context={'request': request})
        
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk, format=None):
        demande = self.get_object(pk)
        serializer = DemandeExplicationSerializer(demande, data=request.data)
        if serializer.is_valid():
            serializer.save()
            response_demande = request.data.get('response_demande', None)
            if response_demande:
                DemandeExplication.objects.filter(date_init__lt=datetime.strptime(response_demande, "%Y-%m-%d") + 3).update(statut_de=5)
                DemandeExplication.objects.filter(date_init__gte=datetime.strptime(response_demande, "%Y-%m-%d") + 3).update(statut_de=2)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        demande = self.get_object(pk)
        demande.active = False
        demande.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
