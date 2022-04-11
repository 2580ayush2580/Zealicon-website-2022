from rest_framework.serializers import ModelSerializer, SerializerMethodField
from account.models import Participant
from events.models import Event, Society, Venue


class SocietySerializer(ModelSerializer):
    class Meta:
        model = Society
        fields = "__all__"


class VenueSerializer(ModelSerializer):
    class Meta:
        model = Venue
        fields = "__all__"


class ContactSerializer(ModelSerializer):
    class Meta:
        model = Participant
        fields = ("fullname", "contact_no")


class EventSerializer(ModelSerializer):
    category = SerializerMethodField("get_category")
    society = SerializerMethodField("get_society")
    venue = SerializerMethodField("get_venue")
    contact = ContactSerializer()

    def get_category(self, event):
        return event.category.name

    def get_society(self, event):
        return event.society.name

    def get_venue(self, event):
        return event.venue.building.name + " - " + event.venue.room.name

    class Meta:
        model = Event
        fields = "__all__"
