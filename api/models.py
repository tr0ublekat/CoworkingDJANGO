from django.db import models
from users.models import CustomUser

class Institution(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=150)
    latitude = models.FloatField(default=0.0)
    longitude = models.FloatField(default=0.0)

    def __str__(self):
        return str(self.name) + ' (' + str(self.address) + ')'

class Room(models.Model):
    number = models.IntegerField()
    institution = models.ForeignKey(Institution, on_delete=models.CASCADE)
    capacity = models.IntegerField(default=0)
    code = models.TextField(default='')
    description = models.TextField(default='')

    def __str__(self):
        return str(self.number) + ' - ' + str(self.institution.name) + ' (' + str(self.institution.address) + ')'

class Book(models.Model):
    date = models.DateField()
    place = models.IntegerField()
    time = models.IntegerField()

    student = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING, related_name='book_student')
    room = models.ForeignKey(Room, on_delete=models.DO_NOTHING)

    def __str__(self):
        return str(self.date)
