import json
from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import Http404
from .serializers import SanctionSerializer, SanctionSerializerDetail, MotifsSanctionSerializer, MotifsSanctionSerializerDetail
from .models import Sanction, MotifSanction


class SanctionListView(APIView):
    """
    List all Sanctions, filtering by query parameters if provided,
    including related MotifSanctions.
    """
    def get(self, request, format=None):
        queryset = Sanction.objects.filter(active=True)  # Base queryset
        motifSanction = []

        # Filter by query parameters if they exist
        if request.query_params:
            filters = {}
            for key, value in request.query_params.items():
                filters[key] = value
            queryset = queryset.filter(**filters)

        # Include related MotifSanctions and return updated list
        # updated_sanctions = []
        # for sanction in queryset:
        #     motifs = MotifSanction.objects.filter(sanction_id=sanction.uuid)
        #     sanction.motifs = motifs  
        #     print(sanction.motifs)
        #     # serializer = SanctionSerializerDetail(sanction)
        #     updated_sanctions.append(sanction)
        #     print(updated_sanctions)

        serializer = SanctionSerializerDetail(queryset, many=True)
        return Response(serializer.data)

        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = SanctionSerializer(data=request.data, many=False, context={'request': request})
        if serializer.is_valid():
            if "motifs" in request.data:
                sanction = serializer.save()
                sanction_id = sanction.uuid
                data = request.data.get("motifs")
                for motif in data:
                    motif_serializer = MotifsSanctionSerializer(data=[{"motif_id":motif, "sanction_id":str(sanction_id)}], many=True)
                    if motif_serializer.is_valid():
                        motif_serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

class SanctionDetail(APIView):
    """
    Get Response by Id, Update Response, Delete Response
    """
    def get_object(self, pk):
        try:
            motif = Sanction.objects.get(uuid=pk)
            return motif
        except Sanction.DoesNotExist:
            raise Http404
        

    def get(self, request, pk,  format=None):
        response = self.get_object(pk)
        serializer = SanctionSerializerDetail(response, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def put(self, request, pk, format=None):
        response = self.get_object(pk)
        serializer = SanctionSerializer(response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        response = self.get_object(pk)
        response.active = False
        response.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
