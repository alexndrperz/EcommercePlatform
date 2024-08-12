from rest_framework import serializers
from django.contrib.auth.models import Group
from rest_framework_simplejwt.tokens import Token 
import rest_framework_simplejwt.serializers as jwt_serializer
from . import models

class CustomTokenObtain(jwt_serializer.TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user) -> Token:
        token = super().get_token(user=user)
        
        token['name'] = user.name 
        token['user_group'] = list(user.groups.values_list('name', flat=True))
        return token
     
     
     
class ProductSerializer(serializers.ModelSerializer):
    creator= serializers.SerializerMethodField()
    
    def get_creator(self, obj):
        return obj.creator.name
    
    
    class Meta:
        model = models.Productos
        fields = ('id','name','price','createdAt','creator')
        
    def create(self, validated_data):
        producto = models.Productos.objects.create(creator_id=1, **validated_data)
        return producto
        
class UserSerializer(serializers.ModelSerializer):
    purchases_count = serializers.SerializerMethodField()
    is_active = serializers.SerializerMethodField()
    
    
    def get_is_active(self, obj):
        if obj.is_active:
            return 'Si'
        else:
            return 'No'
        
    def get_purchases_count(self, obj):
        return obj.total_purchases
    
    class Meta:
        model = models.User
        fields= ('id','name','purchases_count',"image",'is_active')


class ClientViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = '__all__'

class TransactSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField()
    buyer = serializers.SerializerMethodField()

    class Meta:
        model = models.Transacts
        fields = '__all__'

    def get_product(self, obj):
        return obj.product.name
    
    def get_buyer(self, obj):
        return obj.buyer.name