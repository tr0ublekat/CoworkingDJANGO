from django.shortcuts import render

def index(request):
    return render(request, 'booking-v2/index.html')
