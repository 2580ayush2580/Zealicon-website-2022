from django.db import models
from django.contrib.auth.models import User


class Society(models.Model):
    name = models.CharField(max_length=64)
    short_form = models.CharField(max_length=16)
    contact = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Societies"


class Room(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Building(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Venue(models.Model):
    building = models.ForeignKey(Building, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    def __str__(self):
        return self.building.name + " - " + self.room.name


class Event_Category(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Event Categories"


class Event(models.Model):
    name = models.CharField(max_length=64)
    category = models.ForeignKey(Event_Category, on_delete=models.CASCADE)
    society = models.ForeignKey(Society, on_delete=models.CASCADE)
    datetime = models.DateTimeField()
    duration = models.DurationField()
    contact = models.ForeignKey(User, on_delete=models.CASCADE)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
    description = models.TextField(max_length=2048)
    rules = models.TextField(max_length=1024)
    prizes = models.TextField(max_length=1024)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class EventRegistration(models.Model):
    participant = models.ForeignKey("account.Participant", on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    registration_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (
            self.event.name
            + " - "
            + self.participant.zeal_id
            + " - "
            + self.participant.fullname
        )
