from django.urls import include, path
from rest_framework.routers import DefaultRouter
from events.views import EventViewSet, EventRegistrationViewSet


router = DefaultRouter()
router.register("all", EventViewSet)
router.register("registration", EventRegistrationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
