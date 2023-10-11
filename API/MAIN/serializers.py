from rest_framework import serializers
from django.contrib.auth.models import Group
from rest_framework_simplejwt.tokens import Token 
import rest_framework_simplejwt.serializers as jwt_serializer
from . import models

class CustomTokenObtain(jwt_serializer.TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user) -> Token:
        token = super().get_token()
        
        token['name'] = user.name 
        token['user_group'] = list(user.groups.values_list('name', flat=True))
     
     
     
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Productos
        fields = '__all__'
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        exclude = ('password')