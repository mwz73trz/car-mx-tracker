from rest_framework import serializers
from .models import *

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'make', 'car_model', 'year_made', 'fuels']

class FuelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fuel
        fields = ['id', 'date_filled', 'location', 'price', 'miles_driven', 'gallons_pumped', 'total_amount', 'mpg', 'car']

    total_amount = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    mpg = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
