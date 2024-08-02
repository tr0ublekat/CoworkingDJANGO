from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index, name="booking-v2"),
    
]
