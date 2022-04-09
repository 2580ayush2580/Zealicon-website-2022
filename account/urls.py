from django.urls import include, path
from rest_framework.routers import DefaultRouter
from account.views import UserViewSet


router = DefaultRouter()
router.register("", UserViewSet, basename="user")

urlpatterns = router.urls
