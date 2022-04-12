from django.contrib import admin
from events.models import (
    Event,
    Event_Category,
    Society,
    Room,
    Venue,
    Building,
    EventRegistration,
)


class SocietyAdmin(admin.ModelAdmin):
    list_display = ("name", "contact")
    search_fields = ("name", "contact__name")


class VenueAdmin(admin.ModelAdmin):
    list_display = ("building", "room")
    search_fields = ("building", "room")


class SocietyAdmin(admin.ModelAdmin):
    list_display = ("name", "contact")
    search_fields = ("name", "contact")


class EventAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "society",
        "datetime",
        "duration",
        "contact",
        "venue",
    )
    list_filter = (
        "category",
        "society",
        "venue",
    )
    search_fields = (
        "name",
        "contact",
        "description",
        "rules",
        "prizes",
    )


class EventRegistrationAdmin(admin.ModelAdmin):
    list_display = ("event", "participant", "is_active", "registration_time")
    list_filter = ("is_active", "event")
    search_fields = ("event", "participant")


admin.site.register(Society, SocietyAdmin)
admin.site.register(Room)
admin.site.register(Venue, VenueAdmin)
admin.site.register(Building)
admin.site.register(Event_Category)
admin.site.register(Event, EventAdmin)
admin.site.register(EventRegistration, EventRegistrationAdmin)
