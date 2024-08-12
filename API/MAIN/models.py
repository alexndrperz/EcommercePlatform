from django.db import models
from django.contrib.auth.models import(
    AbstractBaseUser, BaseUserManager,  
    PermissionsMixin
)

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, name,password=None, **extra_fields):
        if not name or not password:
            raise ValueError(("Debe existir un nombre de usuario y una contraseña"))
        user = self.model(name=name, **extra_fields)
        print(222)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, name, password=None, **extra__fields):
        extra__fields.setdefault('is_staff',True)
        extra__fields.setdefault('is_superuser',True)
        return self.create_user(name, password, **extra__fields)
    
    
class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=50, unique=True)
    email = models.EmailField(max_length=254)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    USERNAME_FIELD='name'
    objects = UserManager()
    
    @property
    def total_purchases(self):
        return self.transacts_set.count()
    
    
class Cliente(models.Model):
    name = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)
    correo = models.CharField(max_length=50)
    createdAt = models.DateTimeField(auto_now_add=True)
    image = models.ImageField( upload_to="images/", default="images/nf.jpg")
    
    
class Productos(models.Model):
    name = models.CharField(max_length=50, )
    price = models.DecimalField(max_digits=10, decimal_places=2)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateField(auto_now_add=True)

    
class Transacts(models.Model):
    product = models.ForeignKey(Productos, on_delete=models.CASCADE)
    buyer = models.ForeignKey(User, on_delete=models.CASCADE)
    createdAt = models.DateField(auto_now_add=True)
    quantity = models.IntegerField()
    total = models.DecimalField(max_digits=10, decimal_places=2)