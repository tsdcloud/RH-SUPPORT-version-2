from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import Http404
from .serializers import DemandeSerializerDetail, DemandeExplicationSerializer
from .models import DemandeExplication


class DemandeListView(APIView):
    """
    List all Explanation requests, Create a new EXplanation request, Update a Explanation request and Delete a Explanation request
    """
    def get(self, request,  format=None):
        demande = DemandeExplication.objects.filter(active=True)
        serializer = DemandeExplicationSerializer(demande, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        print("Body :",request.body)
        serializer = DemandeExplicationSerializer(data=request.data, many=False, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DemandeExplicationDetail(APIView):
    """
    Get Demande Explication by Id, Update Demande Explication, Delete Demande Explication
    """
    def get_object(self, pk):
        try:
            motif = DemandeExplication.objects.get(uuid=pk, active=True)
            return motif
        except DemandeExplication.DoesNotExist:
            raise Http404
        

    def get(self, request, pk,  format=None):
        demande = self.get_object(pk)
        serializer = DemandeSerializerDetail(demande, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def put(self, request, pk, format=None):
        demande = self.get_object(pk)
        serializer = DemandeExplicationSerializer(demande, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        demande = self.get_object(pk)
        demande.active = False
        demande.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
