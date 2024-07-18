from rest_framework import serializers
from .models import Employee
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
        extra_kwargs = {'password': {'write_only': True}}
        
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = (
            "empID",
            "firstname",
            "lastname",
            "email",
            "dept",
            "phone",
            "add",
            "sal",
        )
# authentication/serializers.py

