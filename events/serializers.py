from rest_framework.serializers import ModelSerializer, SerializerMethodField
from events.models import Event, Society, Venue, EventRegistration
from account.models import User
from account.serializers import ParticipantSerializer, UserDetailsSerializer


class SocietySerializer(ModelSerializer):
    class Meta:
        model = Society
        fields = "__all__"


class VenueSerializer(ModelSerializer):
    class Meta:
        model = Venue
        fields = "__all__"


class ContactSerializer(ModelSerializer):
    userdetails = UserDetailsSerializer()

    class Meta:
        model = User
        fields = ("first_name", "last_name", "userdetails")


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


class EventRegistrationSerializer(ModelSerializer):
    participant = ParticipantSerializer()
    event = EventSerializer()

    class Meta:
        model = EventRegistration
        fields = "__all__"
