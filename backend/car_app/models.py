from django.db import models
from django.contrib.auth.models import User

class Car(models.Model):
    make = models.CharField(max_length=35)
    car_model = models.CharField(max_length=35)
    year_made = models.IntegerField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cars', blank=True, null=True)

    def __str__(self):
        return f'{self.make} {self.car_model}'

class Fuel(models.Model):
    date_filled = models.DateField()
    location = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2, max_digits=6)
    miles_driven = models.DecimalField(decimal_places=2, max_digits=10)
    gallons_pumped = models.DecimalField(decimal_places=2, max_digits=10)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='fuels')

    class Meta:
        ordering = ['-date_filled']

    def __str__(self):
        return f'{self.date_filled}'

    @property
    def total_amount(self):
        return self.price * self.gallons_pumped

    @property
    def mpg(self):
        return self.miles_driven / self.gallons_pumped

class Oil(models.Model):
    date_changed = models.DateField()
    location = models.CharField(max_length=50)
    type_oil = models.CharField(max_length=50)
    miles_driven = models.DecimalField(decimal_places=2, max_digits=10)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='oils', blank=True, null=True)

    class Meta:
        ordering = ['-date_changed']

    def __str__(self):
        return f'{self.date_changed}'

    @property
    def oil_due(self):
        return self.miles_driven + 6000 
    
