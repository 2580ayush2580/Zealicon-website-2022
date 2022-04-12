from random import randint
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

from events.models import Society
from .validators import validate_contact_number


class UserDetails(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="userdetails"
    )
    contact_no = models.CharField(
        max_length=10, unique=True, validators=[validate_contact_number]
    )
    society = models.ForeignKey(Society, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.user.username


class Participant(models.Model):
    email = models.EmailField(unique=True)
    date_joined = models.DateTimeField(default=timezone.now)
    zeal_id = models.CharField(max_length=16, blank=True, null=True)
    admission_no = models.CharField(max_length=16, unique=True)
    fullname = models.CharField(max_length=128)
    college = models.CharField(max_length=128)
    contact_no = models.CharField(
        max_length=10, unique=True, validators=[validate_contact_number]
    )
    coupon_collected = models.BooleanField(default=False)
    coupon_used = models.BooleanField(default=False)

    def generate_zeal_id(self):
        generated_zeal_id = "Zeal-ID-" + f"{randint(0, 9999):04}"
        while Participant.objects.filter(zeal_id=generated_zeal_id).exists():
            generated_zeal_id = "Zeal-ID-" + f"{randint(0, 9999):04}"
        self.zeal_id = generated_zeal_id

    def save(self, *args, **kwargs):
        self.admission_no = self.admission_no.upper()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.fullname
