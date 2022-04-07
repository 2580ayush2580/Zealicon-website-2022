from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=128)
    phone = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Society(models.Model):
    name = models.CharField(max_length=64)
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Room(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Venue(models.Model):
    building = models.CharField(max_length=64)
    room = models.CharField(max_length=64)

    def __str__(self):
        return self.building + " - " + self.room


class Building(models.Model):
    name = models.CharField(max_length=64)
    rooms = models.ManyToManyField(Room, through=Venue)

    def __str__(self):
        return self.name


class Event_Category(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=64)
    category = models.ForeignKey(Event_Category, on_delete=models.CASCADE)
    society = models.ForeignKey(Society, on_delete=models.CASCADE)
    datetime = models.DateTimeField()
    duration = models.DurationField()
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
    description = models.TextField(max_length=2048)
    rules = models.TextField(max_length=1024)
    prizes = models.TextField(max_length=1024)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
