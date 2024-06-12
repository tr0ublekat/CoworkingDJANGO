from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager

class CustomUser(AbstractUser):
    role = models.CharField(max_length=20)

    username = None
    email = None

    email = models.EmailField(unique=True)
    student_id = models.IntegerField(unique=True)
    middle_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [
                    'student_id',
                    'first_name',
                    'last_name',
                    'middle_name',
                    'role',
                    'password'
                    ]

    objects = CustomUserManager()

    class Meta:
        ordering = [
                    'first_name',
                    'last_name',
                    'middle_name',
                    'email',
                    'student_id',
                    'role',
                    'password',
                    'is_superuser',
                    'is_staff',
                    'is_active',
                    'date_joined',
                    'last_login'
                    ]

    def __str__(self):
        return str(self.student_id)