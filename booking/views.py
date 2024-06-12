from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from .models import Book
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
                            book = Book()
                            book.data = data
                            book.place = place
                            book.student_id = student_id
                            book.time = time
                            book.save()

        return redirect("booking")

def filter(request):
    if request.method == "GET":
        filtered_data = request.GET.get("data")

        numbers = list(range(1, 11))
        filtered_books = Book.objects.filter(data=filtered_data)
        filtered_times = filtered_books.values_list('time', flat=True)
        return render(request, 'booking/index.html', {'filtered_books': filtered_books, 'filtered_data': filtered_data, 'filtered_times': filtered_times, 'numbers': numbers})

def user_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user=user)
            return redirect('booking')
        else:
            return HttpResponse("Incorrect login or password")
    return render(request, 'booking/login.html')

def user_logout(request):
    logout(request)
    return redirect("login")