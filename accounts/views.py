from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Pen, Profile, Categories
from .forms import PenForm
from .serializers import PenSerializer
from datetime import datetime, timedelta
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
import json
from rest_framework import status


@api_view(['GET'])
def penList (request):
    """ Return all pen objects to the API interface in json format

        param: request
    """
    pens = Pen.objects.all() #query for all objects
    penDetails = []

    for pen in pens: #conversion into dict
        detail = {
            "name": pen.name,
            "categories":list(pen.categories.values_list("useCase", flat=True)),
            "details":pen.details,
            "pen_make":pen.pen_make,
            "picture":pen.picture.url,
        }

        jsonDetails = json.loads(json.dumps(detail)) #serialization
        penDetails.append(jsonDetails)
    return render(request, 'all_pens.html', {'pens': penDetails})


@api_view(['GET'])
def penDetail (request, pk):
    """ Return one pen object's details defined by its fields

        param: request, pk
    """
    #non-int value inputs
    try:
        int(pk)
    except ValueError:
        return Response(status=status.HTTP_400_BAD_REQUEST )

    #not-found inputs
    try:
        pens = Pen.objects.get(id=pk)
    except Pen.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PenSerializer(pens, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def penCategories (request, pk):
    """ Return one pen object's categories (many to many)

        param: request, pk
    """
    pens = Pen.objects.get(id=pk)
    data = { #serialization
        "name": pens.name,
        "categories": list(pens.categories.values_list("useCase", flat=True)),
    }
    return JsonResponse(data)


@login_required(login_url='login')
def penCreate (request):
    """ Create new pen with API interface

        param: request
    """
    if request.user.is_staff:
        form = PenForm()
        context = {'form': form}
        if request.method == 'POST':
            form = PenForm(request.POST, request.FILES)
            if form.is_valid():
                curr = form.save()
                curr.user = request.user
                curr.save()
        return render(request, 'pen_settings.html', context=context)
    else:
        return redirect('home')


@api_view(['GET'])
def getPensbyCategory (request, category):
    """ retrieve all pens by the category

        param: request
    """

    tag = Categories.objects.get(useCase=category)

    serializer = PenSerializer(Pen.objects.filter(categories=tag), many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def penUpdate (request, pk):
    """ Update a single pen object's fields

        param: request, pk
    """
    pen = Pen.objects.get(id=pk)
    serializer = PenSerializer(instance=pen, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def penDelete (request, pk):
    """ Delete a single pen object

        param: request, pk
    """
    pen = Pen.objects.get(id=pk)
    pen.delete()
    return Response('delete: successful')


@api_view(['GET'])
def penMonthly (request):
    """ Render all pen objects as JSON for processing

        param: request
    """
    pens = Pen.objects.all()
    serializer = PenSerializer(pens, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def validateSubmission (request):
    """ Validate whether new form can be submitted

        param: request
    """
    profile = Profile.objects.get(user=request.user)
    if profile.lastSumbitted is None or datetime.date.today - timedelta(days=30) > profile.lastSumbitted:
        return Response(True)
    else:
        return Response(False)


@api_view(['PUT'])
def recordDate (request):
    """ Enter submission date to Profile object

        param: request
    """
    profile = Profile.objects.get(user=request.user)
    profile.update(lastSubmitted=datetime.date.today)
    return Response('result: successful')

