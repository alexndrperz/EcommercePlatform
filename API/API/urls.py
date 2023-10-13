
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as  jwt_views
from MAIN import views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('mensaje/<str:name>', views.UsersView.as_view({'get':'mostrar_mensaje'})),
    path('productos', views.ProductsView.as_view({'get':'get_all_products', 'post':'create_product'})),
    path('productos/<int:id>', views.ProductsView.as_view({'put':'update_product', 'delete':'delete_product'})),
    path('users', views.UsersView.as_view({'get':'get_users','post':'create_user'})),
    path('users/<int:id>', views.UsersView.as_view({'delete':'desactivate_user','get':'get_user_balance'})),
    path('auth',jwt_views.TokenObtainPairView().as_view()),
    path('transacts/<int:product_id>/<int:buyer_id>', views.TransactsView.as_view({'post':'buy_product'})),
    path('transacts', views.TransactsView.as_view({'get':'get_all_transacts'})),
    path('transacts/user/<int:id_user>', views.TransactsView.as_view({'get':'get_transacts_user_based'})),
    path('transacts/report', views.TransactsView.as_view({'get':'get_transacts_xlsx'}))
]
