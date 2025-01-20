from django.urls import path, include
from . import views

urlpatterns = [
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('register/', views.user_register, name='register'),
    path('profile/', views.profile, name='profile'),
    path('profile/remove-book/', views.remove_book, name='remove_book'),

    path('admin-page/requests/', views.user_requests, name='user_requests'),
    path('admin-page/requests/request-enable/', views.request_enable, name='request_enable'),
]
