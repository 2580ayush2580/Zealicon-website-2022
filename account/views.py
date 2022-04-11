from django.core.validators import validate_email
from django.forms import ValidationError
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from account.models import User
from account.serializers import UserSerializer
from account.utils import parse_user
from account.validators import validate_contact_number


class UserViewSet(ViewSet):
    def create(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

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
