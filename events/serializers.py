from unicodedata import category
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from events.models import Event, Event_Category, Society, Room, Venue, Building


class SocietySerializer(ModelSerializer):
    class Meta:
        model = Society
        fields = "__all__"


class VenueSerializer(ModelSerializer):
    class Meta:
        model = Venue
        fields = "__all__"


class EventSerializer(ModelSerializer):
    category = SerializerMethodField("get_category")
    society = SerializerMethodField("get_society")
    contact = SerializerMethodField("get_contact")
    venue = SerializerMethodField("get_venue")

    def get_category(self, event):
        return event.category.name

    def get_society(self, event):
        return event.society.name

    def get_contact(self, event):
        return event.contact.fullname

    def get_venue(self, event):
        return event.venue.building.name + " - " + event.venue.room.name

    class Meta:
        model = Event
        fields = "__all__"
