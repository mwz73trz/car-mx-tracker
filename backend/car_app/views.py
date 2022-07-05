from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *

class CarViewSet(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class FuelViewSet(ModelViewSet):
    queryset = Fuel.objects.all().order_by('date_filled')
    serializer_class = FuelSerializer
