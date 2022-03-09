from unicodedata import category
from rest_framework import serializers
from .models import BaseDetail

class BaseDetailSerializer(serializers.ModelSerializer):
    category_name = serializers.StringRelatedField()
    townhall_level = serializers.StringRelatedField()  #these two are foreign keys.
    
    class Meta:
        model = BaseDetail
        fields = '__all__' 