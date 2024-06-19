from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.booking, name="booking"),
    path('filter/', views.filter, name="filter"),
    path('check-availability/', views.check_availability, name='check_availability'),
]
