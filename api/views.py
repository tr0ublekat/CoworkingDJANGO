from django.shortcuts import render
from rest_framework import viewsets
from django.shortcuts import redirect

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

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

def main(request):
    return render(request, 'booking-v2/main.html')

def index(request):
    if request.user.is_authenticated:
        return render(request, 'booking-v2/index.html')
    else:
        return redirect('login')


@csrf_exempt
def available_times(request):
    if request.method == 'POST':
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

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Разрешен только POST запрос'}, status=405)


from django.db import transaction

@csrf_exempt
def booking(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            date = data.get('date')
            place = data.get('place')
            times = data.get('times', [])
            room_id = data.get('room_id')
            student_ids = data.get('student_ids', [])

            if not (date or place or times or room_id or student_ids):
                return JsonResponse({'error': 'Пропущены параметры JSON'}, status=400)
            
            try:
                with transaction.atomic():
                    for time in times:
                        for studentID in student_ids:
                            student = CustomUser.objects.get(student_id=studentID).pk
                            if not Book.objects.filter(date=date, place=place, student_id=student, time=time, room_id=room_id).exists():
                                book = Book(date=date, place=place, student_id=student, time=time, room_id=room_id)
                                book.save()
                            else:
                                return JsonResponse({'error': 'Место уже забронировано на данное время'}, status=500)
                return JsonResponse({'message': 'Место успешно забронировано'}, status=201)
            
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=500)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Разрешен только POST запрос'}, status=405)


@csrf_exempt
def available_student(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            student_id = data.get('student_id')
            
            try:
                student = CustomUser.objects.get(student_id=student_id)
                return JsonResponse({'available-student': 'true'}, status=200)
            except:
                return JsonResponse({'available-student': 'false'}, status=404)
            
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        pass

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