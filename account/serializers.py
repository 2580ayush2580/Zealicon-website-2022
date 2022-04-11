from rest_framework import serializers

from .models import Participant


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
