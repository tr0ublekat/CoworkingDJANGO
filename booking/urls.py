from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.booking, name="booking"),
    path('filter/', views.filter, name="filter"),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
]
