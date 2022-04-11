from rest_framework import serializers

from .models import Participant, UserDetails


class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = [
            "zeal_id",
            "admission_no",
            "email",
            "fullname",
            "college",
            "contact_no",
        ]


class UserDetailsSerializer(serializers.ModelSerializer):
    society = serializers.CharField(source="society.name")

    class Meta:
        model = UserDetails
        fields = [
            "contact_no",
            "society",
        ]
