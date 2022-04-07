from django.urls import include, path
from account.views import get_zeal_id

urlpatterns = [
    path("", include("djoser.urls")),
    path("", include("djoser.urls.jwt")),
    path("get_zeal_id/", get_zeal_id, name="get_zeal_id"),
]
