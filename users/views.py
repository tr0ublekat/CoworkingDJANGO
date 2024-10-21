from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from .models import CustomUser

def user_login(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user=user)
            return redirect('booking-v2')
        else:
            return HttpResponse("Incorrect login or password")
    return render(request, 'user/login.html')

def user_logout(request):
    logout(request)
    return redirect("login")

def user_register(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        student_id = request.POST['student_id']
        middle_name = request.POST['middle_name']
        role = request.POST['role']

        if CustomUser.objects.filter(email=email).exists():
            return HttpResponse("Email already exists")

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
    return render(request, 'user/profile.html')

def edit_books(request):
    return render(request, 'user/edit_books.html')

