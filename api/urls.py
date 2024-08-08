from django.urls import path, include

from rest_framework import routers
from .views import (
    InstitutionView,
    RoomView,
    BookView,
    UserView
)

router = routers.DefaultRouter()
router.register(r'institutions', InstitutionView)
router.register(r'rooms', RoomView)
router.register(r'bookings', BookView)
router.register(r'users', UserView)

urlpatterns = [
    path('', include(router.urls)),
]