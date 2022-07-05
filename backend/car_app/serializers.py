from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'make', 'car_model', 'year_made', 'fuels', 'oils', 'owner']

class FuelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fuel
        fields = ['id', 'date_filled', 'location', 'price', 'miles_driven', 'gallons_pumped', 'total_amount', 'mpg', 'car']

    total_amount = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    mpg = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

class OilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oil
        fields = ['id', 'date_changed', 'location', 'type_oil', 'miles_driven', 'oil_due', 'car']

    oil_due = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"]) 
        return super().create(validated_data)
