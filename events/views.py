from rest_framework.viewsets import ReadOnlyModelViewSet
from events.models import Event
from events.serializers import EventSerializer


class EventViewSet(ReadOnlyModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_fields = ("category", "society", "venue")
