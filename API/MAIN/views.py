from rest_framework import viewsets
from . import models, serializers
from django.http import JsonResponse


class ProductsView(viewsets.ModelViewSet):
    queryset = models.Productos.objects.all()
    serializer_class = serializers.ProductSerializer
    
    def get_all_products(self, request):
        products = models.Productos.objects.all()
        serializer = serializers.ProductSerializer(products, many=True)
        return JsonResponse({'data':serializer.data})   