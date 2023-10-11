from rest_framework import viewsets
from . import models, serializers
from django.http import JsonResponse
from django.shortcuts import get_object_or_404


class ProductsView(viewsets.ModelViewSet):
    queryset = models.Productos.objects.all()
    serializer_class = serializers.ProductSerializer
    
    def get_all_products(self, request):
        products = models.Productos.objects.all()
        serializer = serializers.ProductSerializer(products, many=True)
        return JsonResponse({'data':serializer.data})  
    
    def create_product(self, request):
        serializer = serializers.ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse({}, status=201) 
    
    def update_product(self, request, id):
        product = get_object_or_404(models.Productos, id=id)
        serializer = serializers.ProductSerializer(product,data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse({}, status=204)
    
    def delete_product(self, request, id):
        product = get_object_or_404(models.Productos, id=id)
        product.delete()
        return JsonResponse({}, status=204)
    
class UsersView(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer
    
    def get_users(self, request):
        queryset = models.User.objects.all()
        serializer = serializers.UserSerializer(queryset, many=True)
        return JsonResponse({'data':serializer.data}, status=200)
    
    def create_user(self, request):
        name = request.data.get('name',None)
        password = request.data.get('password',None)
        if not name or not password:
            return JsonResponse({'msg':'Deposite bien los datos'}, status=400)
        else:
            user = models.User(name=name)
            user.set_password(password)
            user.save()
        return JsonResponse({},status=204)
    
    def desactivate_user(self, request,id):
        user = get_object_or_404(models.User, id=id)
        user.is_active = False
        user.save()
        return JsonResponse({}, status=204)