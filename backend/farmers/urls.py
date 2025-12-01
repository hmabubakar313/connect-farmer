from rest_framework import routers

from .views import FarmerViewSet

router = routers.DefaultRouter()
router.register(r"farmers", FarmerViewSet, basename="farmer")

urlpatterns = router.urls
