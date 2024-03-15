from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import Http404
from .serializers import TemoinsSerializer, TemoinsSerializerDetail
from .models import Temoins


class TemoinsListView(APIView):
    """
    List all Response, Create a new Response, Update a Response and Delete a Response
    """
    def get(self, request,  format=None):
        response = Temoins.objects.all()
        serializer = TemoinsSerializer(response, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = TemoinsSerializer(data=request.data, many=False, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class TemoinsDetail(APIView):
    """
    Get Response by Id, Update Response, Delete Response
    """
    def get_object(self, pk):
        try:
            motif = Temoins.objects.get(id_de=pk)
            return motif
        except Temoins.DoesNotExist:
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
