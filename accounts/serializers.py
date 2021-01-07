from rest_framework import serializers
from .models import Pen

class PenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pen
        fields = '__all__'