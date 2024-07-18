from django.contrib import admin
from .models import Employee


models_list=[Employee]
admin.site.register(models_list)

# Register your models here.
