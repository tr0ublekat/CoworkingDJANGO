from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.booking, name="booking"),
    path('filter/', views.filter, name="filter"),
]
