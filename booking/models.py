from django.db import models

class Book(models.Model):
    data = models.DateField()
    place = models.IntegerField()
    student_id = models.IntegerField()
    time = models.IntegerField()

