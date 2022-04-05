from rest_framework import serializers

from .models import User


class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["zeal_id", "username", "email", "avatar", "full_name", "contact_no"]
