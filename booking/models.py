from django.db import models
from users.models import CustomUser

class Book(models.Model):
    data = models.DateField()
    place = models.IntegerField()
    student_id = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    time = models.IntegerField()