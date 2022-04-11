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

    def generate_zeal_id(self, request, queryset):
        for participant in queryset:
            participant.generate_zeal_id()
            participant.save()


class UserDetailsAdmin(admin.ModelAdmin):
    list_display = ["user", "contact_no", "society"]
    search_fields = ["user", "contact_no", "society"]


admin.site.register(Participant, ParticipantAdmin)
admin.site.register(UserDetails, UserDetailsAdmin)
