from django.urls import path, include
from . import views
from api import views as api_views

urlpatterns = [
    path('', views.booking, name="booking"),
    path('v2/', api_views.index, name="booking-v2"),
    path('filter/', views.filter, name="filter"),
    path('check-availability/', views.check_availability, name='check_availability'),
]
