from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from account.serializers import ParticipantSerializer
from account.utils import parse_participant


class UserViewSet(ViewSet):
    def retrieve(self, request, pk=None):
        query = request.query_params.get("query")
        participant = "Participant not found"
        if query:
            participant = parse_participant(query)
            if participant:
                serializer = ParticipantSerializer(participant)
                return Response(serializer.data)
        else:
            return Response({"message": "User not found"})
