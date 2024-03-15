from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import Http404
from .serializers import ResponseSerializer, ResponseSerializerDetail
from .models import Reponse


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
            serializer.save()
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
