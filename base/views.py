from lib2to3.pytree import Base
from django.http import JsonResponse
from django.shortcuts import render
from .bases import bases
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import BaseDetail
from .serializer import BaseDetailSerializer

# Create your views here.

@api_view(['GET'])
def getBases(request):
    bases = BaseDetail.objects.all()
    serializer = BaseDetailSerializer(bases, many=True)
    return Response(serializer.data)