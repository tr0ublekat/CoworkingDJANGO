from django.shortcuts import render
from rest_framework import viewsets

from users.models import CustomUser
from .models import (
    Institution,
    Room,
    Book
)

from .serializers import (
    InstitutionSerializer,
    RoomSerializer,
    BookSerializer,
    UserSerializer
)

def index(request):
    return render(request, 'booking-v2/index.html')

class InstitutionView(viewsets.ModelViewSet):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer

class RoomView(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class BookView(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class UserView(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer