from django.contrib import admin
from .models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    fields = [
        'first_name',
        'last_name',
        'middle_name',
        'email',
        'student_id',
        'role',
        'is_superuser',
        'is_staff',
        'is_active',
        'date_joined',
        'last_login',
        'password',
    ]

admin.site.register(CustomUser, CustomUserAdmin)