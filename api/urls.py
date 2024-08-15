from django.urls import path, include

from rest_framework import routers
from . import views
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
    path('available-times/', views.available_times, name='available_times'),
    path('available-student/', views.available_student, name='available_student'),
    path('book/', views.booking, name='booking'),
]
