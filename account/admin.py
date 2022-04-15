from django.contrib import admin

from .models import Participant, UserDetails


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
