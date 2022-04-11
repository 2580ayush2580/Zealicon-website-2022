from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from account.serializers import UserSerializer
from account.utils import parse_user


class UserViewSet(ViewSet):
    def retrieve(self, request, pk=None):
        query = request.query_params.get("query")
        user = "User not found"
        if query:
            user = parse_user(query)
            if user:
                serializer = UserSerializer(user)
                return Response(serializer.data)
        else:
            return Response({"message": "User not found"})
