from django.core.validators import validate_email
from django.forms import ValidationError
from account.models import User
from account.validators import validate_contact_number


def parse_user(query):
    try:
        validate_email(query)
        user = User.objects.get(email=query)
    except User.DoesNotExist:
        return
    except ValidationError:
        try:
            validate_contact_number(query)
            user = User.objects.get(contact_no=query)
        except User.DoesNotExist:
            return
        except ValidationError:
            try:
                user = User.objects.get(admission_no=query.upper())
            except User.DoesNotExist:
                return
    return user
