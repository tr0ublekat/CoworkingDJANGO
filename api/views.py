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


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json

@csrf_exempt
@require_POST
def available_times(request):
    try:
        data = json.loads(request.body)

        room_id = data.get('room_id')
        date = data.get('date')
        place = data.get('place')

        if not room_id or not date or not place:
            return JsonResponse({'error': 'Пропущены параметры JSON'}, status=400)

        availability = [False] * 10

        bookings = Book.objects.filter(room_id=room_id, date=date, place=place)

        for booking in bookings:
            if 1 <= booking.time <= 10:
                availability[booking.time - 1] = True

        return JsonResponse({'available-times': availability}, status=200)

    except json.JSONDecodeError:
        return JsonResponse({'error': 'Неверный JSON'}, status=400)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)




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