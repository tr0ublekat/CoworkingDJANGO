from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from .models import CustomUser
from api.models import Book, Room, Institution
import datetime

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def user_login(request):

    if request.user.is_authenticated:
        return redirect('profile')

    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user=user)
            return redirect('main')
        else:
            return render(request, 'user/login.html', {'error': 'Неверный логин или пароль'})
    return render(request, 'user/login.html')

def user_logout(request):
    logout(request)
    return redirect("login")

def user_register(request):

    if request.user.is_authenticated:
        return redirect('profile')

    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        student_id = request.POST['student_id']
        middle_name = request.POST['middle_name']
        role = request.POST['role']

        if CustomUser.objects.filter(email=email).exists():
            return render(request, 'user/register.html', {'error': 'Данный email уже используется'})

        user = CustomUser.objects.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            student_id=student_id,
            middle_name=middle_name,
            role=role
        )
        user.save()

        login(request, user)
        return redirect('booking-v2')
    return render(request, 'user/register.html')


def profile(request):
    if request.user.is_authenticated:
        now_date = datetime.datetime.now().date()
        now_hour = datetime.datetime.now().hour
        user = request.user
        bookings = Book.objects.filter(student_id=user).order_by('-date', '-time')
        return render(request, 'user/profile.html', {'bookings': bookings, 'now_date': now_date, 'now_hour': now_hour})
    else:
        return redirect('login')

def remove_book(request):
    if request.method == 'POST':
        pk = request.POST.get("pk")
        try:
            book = Book.objects.get(pk=pk)
            book.delete()
            return redirect("profile")
        except Exception as e:
            return HttpResponse("Запись отсутствует!")
    else:
        return HttpResponse("Что вы тут делаете?")

