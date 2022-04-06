from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "zeal_id",
            "admission_no",
            "email",
            "first_name",
            "last_name",
            "year",
            "branch",
            "college",
            "contact_no",
        ]
