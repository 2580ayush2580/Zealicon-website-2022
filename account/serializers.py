from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "zeal_id",
            "admission_no",
            "email",
            "fullname",
            "college",
            "contact_no",
        ]
