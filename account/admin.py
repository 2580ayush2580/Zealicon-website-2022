from django.contrib import admin

from .models import User


class UserAdmin(admin.ModelAdmin):
    exclude = ["password"]
    list_display = [
        "zeal_id",
        "email",
        "contact_no",
        "admission_no",
        "first_name",
        "last_name",
        "college",
    ]
    search_fields = [
        "zeal_id",
        "email",
        "contact_no",
        "admission_no",
        "first_name",
        "last_name",
        "college",
    ]


admin.site.register(User, UserAdmin)
