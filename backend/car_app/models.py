from django.db import models

class Car(models.Model):
    make = models.CharField(max_length=35)
    car_model = models.CharField(max_length=35)
    year_made = models.IntegerField()

    def __str__(self):
        return f'{self.make} {self.car_model}'

class Fuel(models.Model):
    date_filled = models.DateField()
    location = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2, max_digits=6)
    miles_driven = models.DecimalField(decimal_places=2, max_digits=10)
    gallons_pumped = models.DecimalField(decimal_places=2, max_digits=10)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='fuels')

    def __str__(self):
        return f'{self.date_filled}'

    @property
    def total_amount(self):
        return self.price * self.gallons_pumped

    @property
    def mpg(self):
        return self.miles_driven / self.gallons_pumped
