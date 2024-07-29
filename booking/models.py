from django.db import models
from users.models import CustomUser

class Intstitution(models.Model):
    name = models.CharField(max_length=100)
    adress = models.CharField(max_length=150)

    def __str__(self):
        return str(self.adress)

class Room(models.Model):
    number = models.IntegerField()
    institution = models.ForeignKey(Intstitution, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.number)

class Book(models.Model):
    data = models.DateField()
    place = models.IntegerField()
    student_id = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    time = models.IntegerField()

    def __str__(self):
        return str(self.data)
