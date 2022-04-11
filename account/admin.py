from django.contrib import admin

from .models import Participant


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

    def generate_zeal_id(self, request, queryset):
        for participant in queryset:
            participant.generate_zeal_id()
            participant.save()


admin.site.register(Participant, ParticipantAdmin)
