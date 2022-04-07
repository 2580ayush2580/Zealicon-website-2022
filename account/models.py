from random import randint
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils import timezone

from .validators import validate_contact_number


class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError("The given email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    email = models.EmailField(unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    zeal_id = models.CharField(max_length=16, blank=True, null=True)
    admission_no = models.CharField(max_length=16, unique=True)
    fullname = models.CharField(max_length=128)
    college = models.CharField(max_length=128)
    contact_no = models.CharField(
        max_length=10, unique=True, validators=[validate_contact_number]
    )
    username = None

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "admission_no",
        "fullname",
        "college",
        "contact_no",
    ]

    objects = UserManager()

    def generate_zeal_id(self):
        generated_zeal_id = "Zeal-ID-" + f"{randint(0, 9999):04}"
        while User.objects.filter(zeal_id=generated_zeal_id).exists():
            generated_zeal_id = "Zeal-ID-" + f"{randint(0, 9999):04}"
        self.zeal_id = generated_zeal_id

    def save(self, *args, **kwargs):
        self.admission_no = self.admission_no.upper()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.fullname
