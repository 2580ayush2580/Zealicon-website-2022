import os

from django.contrib import admin

from .models import Participant, UserDetails

from payments.razorpay_utils import get_all_payments


class UnpaidZealIDs(admin.SimpleListFilter):
    title = "Payment not found"
    parameter_name = "unpaid_zeal_ids"

    def lookups(self, request, model_admin):
        return (("yes", "Yes"), ("no", "No"))

    def queryset(self, request, queryset):
        if self.value() == "yes":
            amount = os.environ.get("FEE_AMOUNT")
            amount = int(amount) * 100

            payments = get_all_payments()
            payment_emails = [
                payment["email"].lower()
                for payment in payments
                if payment["amount"] == amount
            ]

            for participant in queryset:
                email = participant.email
                if email in payment_emails:
                    queryset = queryset.exclude(id=participant.id)

        return queryset


class ParticipantAdmin(admin.ModelAdmin):
    exclude = ["password"]
    list_display = [
        "zeal_id",
        "email",
        "contact_no",
        "admission_no",
        "fullname",
        "college",
    ]
    search_fields = [
        "zeal_id",
        "email",
        "contact_no",
        "admission_no",
        "fullname",
        "college",
    ]
    actions = ["generate_zeal_id"]
    readonly_fields = ["zeal_id"]
    list_filter = [UnpaidZealIDs]

    def get_readonly_fields(self, request, obj):
        readonly_fields = []
        if "Glued" in request.user.groups.values_list("name", flat=True):
            readonly_fields += [field.name for field in Participant._meta.get_fields()]
            readonly_fields.remove("coupon_collected")
            readonly_fields.remove("eventregistration")
        return readonly_fields

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        if "Glued" in request.user.groups.values_list("name", flat=True):
            list_display = ["zeal_id", "email", "fullname"]
        return list_display

    def get_list_filter(self, request):
        if request.user.is_superuser:
            return super().get_list_filter(request)
        else:
            return []

    def generate_zeal_id(self, request, queryset):
        for participant in queryset:
            participant.generate_zeal_id()
            participant.save()

    def get_actions(self, request):
        actions = super().get_actions(request)
        if not request.user.is_superuser:
            del actions["generate_zeal_id"]
        return actions


class UserDetailsAdmin(admin.ModelAdmin):
    list_display = ["user", "contact_no", "society"]
    search_fields = ["user", "contact_no", "society"]


admin.site.register(Participant, ParticipantAdmin)
admin.site.register(UserDetails, UserDetailsAdmin)
