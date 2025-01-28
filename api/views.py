from django.shortcuts import render
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets
from django.shortcuts import redirect

from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

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


class AvailableTimesAPIView(APIView):
    @swagger_auto_schema(
        operation_description="Получить доступные временные интервалы для указанной комнаты, даты и места.",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'room_id': openapi.Schema(type=openapi.TYPE_STRING, description='ID комнаты'),
                'date': openapi.Schema(type=openapi.TYPE_STRING, description='Дата в формате YYYY-MM-DD'),
                'place': openapi.Schema(type=openapi.TYPE_STRING, description='Место'),
            },
            required=['room_id', 'date', 'place']
        ),
        responses={
            200: openapi.Response('Успешно', openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'available-times': openapi.Schema(
                        type=openapi.TYPE_ARRAY,
                        items=openapi.Schema(type=openapi.TYPE_BOOLEAN)
                    )
                }
            )),
            400: 'Пропущены параметры JSON',
            500: 'Ошибка сервера'
        }
    )
    def post(self, request):
        try:
            data = request.data
            room_id = data.get('room_id')
            date = data.get('date')
            place = data.get('place')

            if not room_id or not date or not place:
                return Response({'error': 'Пропущены параметры JSON'}, status=400)

            availability = [False] * 10
            bookings = Book.objects.filter(room_id=room_id, date=date, place=place)

            for booking in bookings:
                if 1 <= booking.time <= 10:
                    availability[booking.time - 1] = True

            return Response({'available-times': availability}, status=200)
        except Exception as e:
            return Response({'error': str(e)}, status=500)

from django.db import transaction

class BookingAPIView(APIView):
    @swagger_auto_schema(
        operation_description="Забронировать место на указанные даты и время.",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'date': openapi.Schema(type=openapi.TYPE_STRING, description='Дата в формате YYYY-MM-DD'),
                'place': openapi.Schema(type=openapi.TYPE_STRING, description='Место'),
                'times': openapi.Schema(
                    type=openapi.TYPE_ARRAY,
                    items=openapi.Schema(type=openapi.TYPE_INTEGER),
                    description='Список временных интервалов (от 1 до 10)'
                ),
                'room_id': openapi.Schema(type=openapi.TYPE_INTEGER, description='ID комнаты'),
                'student_ids': openapi.Schema(
                    type=openapi.TYPE_ARRAY,
                    items=openapi.Schema(type=openapi.TYPE_INTEGER),
                    description='Список ID студентов'
                ),
            },
            required=['date', 'place', 'times', 'room_id', 'student_ids']
        ),
        responses={
            201: 'Место успешно забронировано',
            400: 'Пропущены параметры JSON',
            500: 'Ошибка сервера',
        }
    )
    def post(self, request):
        try:
            data = request.data
            date = data.get('date')
            place = data.get('place')
            times = data.get('times', [])
            room_id = data.get('room_id')
            student_ids = data.get('student_ids', [])

            if not (date or place or times or room_id or student_ids):
                return Response({'error': 'Пропущены параметры JSON'}, status=400)

            with transaction.atomic():
                for time in times:
                    for studentID in student_ids:
                        student = CustomUser.objects.get(student_id=studentID).pk
                        if not Book.objects.filter(date=date, place=place, student_id=student, time=time, room_id=room_id).exists():
                            book = Book(date=date, place=place, student_id=student, time=time, room_id=room_id)
                            book.save()
                        else:
                            return Response({'error': 'Место уже забронировано на данное время'}, status=400)
            return Response({'message': 'Место успешно забронировано'}, status=201)
        except Exception as e:
            return Response({'error': str(e)}, status=500)


class AvailableStudentAPIView(APIView):
    @swagger_auto_schema(
        operation_description="Проверить, доступен ли студент с заданным ID.",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'student_id': openapi.Schema(type=openapi.TYPE_INTEGER, description='ID студента'),
            },
            required=['student_id']
        ),
        responses={
            200: openapi.Response('Студент найден', openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'available-student': openapi.Schema(type=openapi.TYPE_STRING, description='Доступность студента')
                }
            )),
            404: 'Студент не найден',
            500: 'Ошибка сервера',
        }
    )
    def post(self, request):
        try:
            data = request.data
            student_id = data.get('student_id')

            student = CustomUser.objects.filter(student_id=student_id).exists()
            if student:
                return Response({'available-student': 'true'}, status=200)
            else:
                return Response({'available-student': 'false'}, status=404)
        except Exception as e:
            return Response({'error': str(e)}, status=500)

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