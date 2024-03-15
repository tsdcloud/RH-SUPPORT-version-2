from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import Http404
from .serializers import PropositionSerializer, PropositionSerializerDetail
from .models import PropositionSanction


class PropositionListView(APIView):
    """
    List all Proposition, Create a new Proposition, Update a Proposition and Delete a Proposition
    """
    def get(self, request,  format=None):
        response = PropositionSanction.objects.filter(active=True)
        serializer = PropositionSerializer(response, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = PropositionSerializer(data=request.data, many=False, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class PropositionDetail(APIView):
    """
    Get Proposition by Id, Update Proposition, Delete Proposition
    """
    def get_object(self, pk):
        try:
            proposition = PropositionSanction.objects.get(id_de=pk, active=True)
            return proposition
        except PropositionSanction.DoesNotExist:
            raise Http404
        

    def get(self, request, pk,  format=None):
        response = self.get_object(pk)
        serializer = PropositionSerializerDetail(response, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def put(self, request, pk, format=None):
        response = self.get_object(pk)
        serializer = PropositionSerializer(response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        response = self.get_object(pk)
        response.active = False
        response.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
