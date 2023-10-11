
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from MAIN import views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('productos', views.ProductsView.as_view({'get':'get_all_products'}))
]
