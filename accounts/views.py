from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Pen

from .serializers import PenSerializer
from django.template import loader
# Create your views here.

def checkme (request):
    print('hellooooo')
    return HttpResponse(request)

@api_view(['GET'])
def checkme (request):
    print('hellooooo')
    return Response(request)

# view all pens
@api_view(['GET'])
def penList (request):
    pens = Pen.objects.all()
    serializer = PenSerializer(pens, many=True)
    return Response(serializer.data)

# single pen to view details
@api_view(['GET'])
def penDetail (request, pk):
    pens = Pen.objects.get(id=pk)
    serializer = PenSerializer(pens, many=False)
    return Response(serializer.data)

#create new pen
@api_view(['POST'])
def penCreate (request):
    serializer = PenSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#update pen
@api_view(['POST'])
def penUpdate (request, pk):
    pen = Pen.objects.get(id=pk)
    serializer = PenSerializer(instance=pen, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete new pen
@api_view(['DELETE'])
def penDelete (request, pk):
    pen = Pen.objects.get(id=pk)
    pen.delete()
    return Response('delete: successful')
