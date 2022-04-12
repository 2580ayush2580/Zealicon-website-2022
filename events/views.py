from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
from account.models import Participant
from events.models import Event, EventRegistration
from events.serializers import EventSerializer, EventRegistrationSerializer


class EventViewSet(ReadOnlyModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_fields = ("category", "society", "venue")


class EventRegistrationViewSet(ReadOnlyModelViewSet):
    queryset = EventRegistration.objects.all()
    serializer_class = EventRegistrationSerializer

    def list(self, request, *args, **kwargs):
        event_id = request.query_params.get("event_id")
        zeal_id = request.query_params.get("zeal_id")

        if not event_id and not zeal_id:
            return Response(
                {"message": "Please provide either event_id or zeal_id or both"},
                status=400,
            )

        registrations = EventRegistration.objects.all()
        if event_id:
            registrations = registrations.filter(event__id=event_id)
        if zeal_id:
            registrations = registrations.filter(participant__zeal_id=zeal_id)

        serializer = EventRegistrationSerializer(registrations, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        event_id = request.data.get("event_id")
        zeal_id = request.data.get("zeal_id")

        if not event_id or not zeal_id:
            return Response(
                {"message": "Please provide event_id and zeal_id"}, status=400
            )

        try:
            event = Event.objects.get(id=event_id)
            participant = Participant.objects.get(zeal_id=zeal_id)
        except Event.DoesNotExist:
            return Response({"message": "Event does not exist"}, status=400)
        except Participant.DoesNotExist:
            return Response({"message": "Participant does not exist"}, status=400)

        already_registered = EventRegistration.objects.filter(
            event=event, participant=participant
        )
        if not already_registered:
            EventRegistration.objects.create(event=event, participant=participant)
            return Response(
                {"message": "Successfully registered for event"}, status=201
            )
        else:
            return Response({"message": "Already registered for event"})
