from django.shortcuts import render, redirect, HttpResponse
from .models import Book, CustomUser
from django.http import JsonResponse
import json

def booking(request):
    if request.method == "GET":
        return render(request, 'booking/index.html')

    if request.method == "POST":
        data = request.POST.get("data")
        place = request.POST.get("place")
        student_ids = request.POST.get("student_ids")
        times = request.POST.get("times")

        # Преобразование строк JSON обратно в списки Python
        try:
            student_ids = json.loads(student_ids)
            times = json.loads(times)
        except json.JSONDecodeError as e:
            # Обработка ошибки декодирования JSON
            return render(request, 'booking/index.html', {'error': e})

        if data and place and student_ids and times:
            for time in times:
                if time:
                    for student_id in student_ids:
                        if student_id:
                            try:
                                # Получение экземпляра CustomUser по идентификатору
                                student = CustomUser.objects.get(student_id=student_id)
                                # Проверка существования записи перед сохранением
                                if not Book.objects.filter(data=data, place=place, student_id=student, time=time).exists():
                                    book = Book(data=data, place=place, student_id=student, time=time)
                                    book.save()
                            except CustomUser.DoesNotExist:
                                # Обработка ошибки, если пользователь не найден
                                return render(request, 'booking/index.html', {'error': f"Студент с таким номером студ. билета ({student_id}) не существует"})

        return redirect("booking")

def filter(request):
    if request.method == "GET":
        filtered_data = request.GET.get("data")
        return render(request, 'booking/index.html', {'filtered_data': filtered_data})

def check_availability(request):
    place = request.GET.get('place')
    data = request.GET.get('data')
    occupied_times = Book.objects.filter(place=place, data=data).values_list('time', flat=True)
    return JsonResponse({"occupied_times": list(occupied_times)})
