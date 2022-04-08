from django.core.validators import validate_email
from django.forms import ValidationError
from rest_framework.decorators import api_view
from rest_framework.response import Response
from account.models import User
from account.serializers import UserSerializer
from account.validators import validate_contact_number


@api_view(["GET"])
def get_zeal_id(request):
    query = request.data.get("query")
    user = "User not found"
    if query:
        try:
            validate_email(query)
            user = User.objects.get(email=query)
        except User.DoesNotExist:
            return Response({"message": "User not found"})
        except ValidationError:
            try:
                validate_contact_number(query)
                user = User.objects.get(contact_no=query)
            except User.DoesNotExist:
                return Response({"message": "User not found"})
            except ValidationError:
                try:
                    user = User.objects.get(admission_no=query)
                except User.DoesNotExist:
                    return Response({"message": "User not found"})
    return Response(UserSerializer(user).data)
