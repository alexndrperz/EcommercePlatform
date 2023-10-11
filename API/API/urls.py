
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as  jwt_views
from MAIN import views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('productos', views.ProductsView.as_view({'get':'get_all_products', 'post':'create_product'})),
    path('productos/<int:id>', views.ProductsView.as_view({'put':'update_product', 'delete':'delete_product'})),
    path('users', views.UsersView.as_view({'get':'get_users','post':'create_user'})),
    path('users/<int:id>', views.UsersView.as_view({'delete':'desactivate_user'})),
    path('auth',jwt_views.TokenObtainPairView().as_view())
]
