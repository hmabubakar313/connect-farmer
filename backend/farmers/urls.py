from rest_framework import routers

from .views import FarmerProfileViewSet

router = routers.DefaultRouter()
router.register(r"", FarmerProfileViewSet, basename="farmer")

urlpatterns = router.urls
