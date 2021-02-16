from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Pen
from .forms import PenForm
from .serializers import PenSerializer

@api_view(['POST'])
def checkConnection (request):
    print('Console: api connection is stable')
    return Response(request, 'api connection is stable')

# view all pens
@api_view(['GET'])
def penList (request):
    pens = Pen.objects.all()
    print(pens.values())
    return render(request, 'all_pens.html', {'pens': pens})

# Pens for the monthly hall of fame
@api_view(['GET'])
def penMonthly (request):
    pens = Pen.objects.all()
    serializer = PenSerializer(pens, many=True)
    return Response(serializer.data)

# single pen to view details
@api_view(['GET'])
def penDetail (request, pk):
    pens = Pen.objects.get(id=pk)
    serializer = PenSerializer(pens, many=False)
    return Response(serializer.data)

# #create new pen with drf interface
# @api_view(['POST'])
# def penCreate (request):
#     serializer = PenSerializer(data=request.data, many=True)
#     if serializer.is_valid():
#         serializer.save()
#
#     return Response(serializer.data)

#create new pen with custom interface
def penCreate (request):

    form = PenForm()
    context = {'form': form}
    if request.method == 'POST':
        form = PenForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    return render(request, 'pen_settings.html', context=context)

#update pen
@api_view(['PUT'])
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
