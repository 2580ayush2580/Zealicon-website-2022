import os
from rest_framework.response import Response
from account.utils import parse_user
from account.serializers import UserSerializer
from payments.models import Order
from payments.razorpay_utils import payment_order, verify_payment

# REST FRAMEWORK IMPORTS
from rest_framework.views import APIView


# REST View
class Payment(APIView):
    def get(self, request, format=None):
        order_data, order_id = payment_order()
        context = {
            "key_id": os.environ.get("KEY_ID"),
            "order_id": order_data["id"],
            "amount": order_data["amount"],
            "server_order_id": order_id,
        }
        return Response(context)

    def post(self, request, format=None):
        if verify_payment(request.data):
            order = Order.objects.get(order_id=request.data.get("server_order_id"))
            order.amount_paid = order.amount_due
            order.amount_due = 0
            order.status = "captured"
            order.attempts = str(int(order.attempts) + 1)
            order.save()

            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                user = serializer.instance
                if not user.zeal_id:
                    user.generate_zeal_id()
                user.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        else:
            return Response({"status": "Payment Not Valid!"})
