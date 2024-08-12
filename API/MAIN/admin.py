from django.contrib import admin
from . import models
# Register your models here.

admin.site.register([models.User, models.Productos,models.Transacts, models.Cliente])
