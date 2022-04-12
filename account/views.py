from rest_framework.decorators import action
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
        return Response({"message": "User not found"})

    @action(detail=False, methods=["get"])
    def validate_user_details(self, request):
        serialized_data = ParticipantSerializer(data=request.query_params)
        if serialized_data.is_valid():
            return Response({"message": "User details are valid"})
        else:
            return Response(serialized_data.errors, status=400)
