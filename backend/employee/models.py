from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User

# Create your models here.
def validate_length(value):
    an_integer = value
    a_string = str(an_integer)
    length = len(a_string)
    if length != 10:
        raise ValidationError(_("%(value)s is not equal to  10 digits"))


class Employee(models.Model):
   
    empID = models.IntegerField(primary_key=True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField()
    dept = models.CharField(max_length=20)
    phone = models.IntegerField(validators=[validate_length], unique=True)
    add = models.CharField(max_length=100)
    sal = models.IntegerField()
