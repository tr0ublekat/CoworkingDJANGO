from django.urls import path, include
from . import views

urlpatterns = [
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('register/', views.user_register, name='register'),
    path('profile/', views.profile, name='profile'),
    path('edit-books/', views.edit_books, name='edit_books'),
    path('edit-books/remove-book/', views.remove_book, name='remove_book'),
]
