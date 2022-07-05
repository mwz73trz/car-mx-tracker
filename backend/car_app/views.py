from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import *
from .models import *

class CarViewSet(ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        return super().perform_create(serializer)

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Car.objects.all()
        return Car.objects.filter(owner=self.request.user)
    
class FuelViewSet(ModelViewSet):
    queryset = Fuel.objects.all()
    serializer_class = FuelSerializer

class OilViewSet(ModelViewSet):
    queryset = Oil.objects.all()
    serializer_class = OilSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser(),)