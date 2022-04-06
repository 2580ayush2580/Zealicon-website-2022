import os
from rest_framework.response import Response
from account.models import User
from payments.models import Order
from .razorpay_utils import payment_order, verify_payment

# REST FRAMEWORK IMPORTS
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


# REST View
class Payment(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        username = request.user.username
        user = User.objects.get(username=username)

        order_data, order_id = payment_order(user)
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
            fee_amount = os.environ.get("FEE_AMOUNT")
            order.amount_paid = fee_amount
            order.amount_due = 0
            order.status = "captured"
            order.attempts = str(int(order.attempts) + 1)
            order.save()

            user = request.user
            if not user.zeal_id:
                user.generate_zeal_id()
            user.save()

            return Response({"status": "Payment Successful"})
        else:
            return Response({"status": "Payment Failed"})
