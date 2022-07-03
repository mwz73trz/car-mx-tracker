from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('cars', CarViewSet, basename='car')
router.register('fuels', FuelViewSet, basename='fuel')

urlpatterns = [
    path('', include(router.urls)),
]