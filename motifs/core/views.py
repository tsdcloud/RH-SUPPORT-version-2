from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.http import Http404
from .serializers import MotifSerializer
from .models import Motif

class MotifList(APIView):
    """
    List all Motifs, Create a new Motif, Update a Motif and Delete a Motif
    """

    def get_object(self, pk):
        try:
            motif = Motif.objects.get(uuid=pk)
            return motif
        except Motif.DoesNotExist:
            raise Http404

    def get(self, request,  format=None):
        motifs = Motif.objects.all()
        serializer = MotifSerializer(motifs, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MotifSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        motif = self.get_object(pk)
        serializer = MotifSerializer(motif, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        motif = self.get_object(pk)
        motif.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

    # queryset = Motif.objects.all()
    # serializer_class = MotifSerializer



class MotifDetail(APIView):
    """
    Get motif details
    """
    def get_object(self, pk):
        try:
            motif =  Motif.objects.get(uuid=pk)
            print(motif)
            return motif
        except Motif.DoesNotExist:
            raise Http404
        
    def get(self, request, pk, format=None):
        motif = self.get_object(pk)
        print(motif)
        serializer = MotifSerializer(motif)
        return Response(serializer.data)

























# from django.shortcuts import render
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .forms import AddMotif, GetMotif, GetMotifDetail
# from . import constants as c
# from .models import Motif
# import datetime
# import json

# # Create your views here.


# @csrf_exempt
# def motifs(request):
#     # register new motif
#     data = {
#         "error": True,
#         "code": -4,
#     }
#     status = 400
#     if request.method == 'GET':
#         form = GetMotif(request.GET, user = request.headers['Authorization'])
#         if form.is_valid():
#             entity = form.cleaned_data['entity']
#             rubrique = form.cleaned_data['rubrique']
#             # entity = c.getEntities(token=entity)
#             motifs = Motif.read(entity=entity, rubrique=rubrique)
#             data["error"] = False
#             data["code"] = 0
#             data["data"] = motifs
#             status = 200
#         else:
#             status = 400
#             data['code'] = -4
#             data['error'] = True
#             data['description'] = [
#                 {
#                     "entity": form['entity'].errors,
#                     "rubrique": form['rubrique'].errors
#                 }
#             ]
#     elif request.method == 'POST':
#         if not request.body:
#             payload = {}
#         else: 
#             payload = json.loads(request.body)
#         form = AddMotif(payload, user=request.headers['Authorization'])
#         if form.is_valid():
#             entity = form.cleaned_data['entity']
#             nom = form.cleaned_data['nom']
#             rubrique = form.cleaned_data['rubrique']
#             motif = Motif.create(entity=entity, nom=nom, rubrique=rubrique)
#             data["error"] = False
#             data["code"] = 0
#             data["data"] = [{"id": motif.uuid}]
#             status = 201
#         else:
#             status = 400
#             data['code'] = -4
#             data['error'] = True
#             data['description'] = [
#                 {
#                     "entity": form['entity'].errors,
#                     "nom": form['nom'].errors,
#                     "rubrique": form['rubrique'].errors
#                 }
#             ]
#     else:
#         status = 405
#         data['code'] = -5
#         data['error'] = True
#     return JsonResponse(data)


# @csrf_exempt
# def motifs_detail(request):
#     # register new motif
#     data = {
#         "error": True,
#         "code": -4,
#     }
#     status = 400
#     if request.method == 'GET':
#         form = GetMotifDetail(request.GET)
#         if form.is_valid():
#             id = form.cleaned_data['id']
#             rubrique = form.cleaned_data['rubrique']

#             try:
#                 motif = Motif.objects.get(uuid=id, rubrique=rubrique, active=True)
#                 data["error"] = False
#                 data["code"] = 0
#                 data["data"] = [
#                     {
#                         "id":motif.uuid,
#                         "libelle":motif.nom,
#                         "entity":motif.entity,
#                     }
#                 ]
#                 status = 200
#             except Motif.DoesNotExist:
#                 status = 400
#                 data['code'] = -4
#                 data['error'] = True
#                 data['message'] = "Motif does not exist"
                
#     return JsonResponse(data)
