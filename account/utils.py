from django.core.validators import validate_email
from django.forms import ValidationError
from account.models import Participant
from account.validators import validate_contact_number


def parse_participant(query):
    try:
        validate_email(query)
        participant = Participant.objects.get(email=query.lower())
    except Participant.DoesNotExist:
        return
    except ValidationError:
        try:
            validate_contact_number(query)
            participant = Participant.objects.get(contact_no=query)
        except Participant.DoesNotExist:
            return
        except ValidationError:
            try:
                participant = Participant.objects.get(admission_no=query.upper())
            except Participant.DoesNotExist:
                return
    return participant
