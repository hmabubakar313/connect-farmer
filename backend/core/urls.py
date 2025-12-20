from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import AdminOnlyView, LoginView, MeView, RefreshView, RegisterView, ConsumerProfileViewSet

router = DefaultRouter()
router.register(r'consumers', ConsumerProfileViewSet, basename='consumer')

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='auth_login'),
    path('refresh/', RefreshView.as_view(), name='auth_token_refresh'),
    path('me/', MeView.as_view(), name='me'),
    path('admin-only/', AdminOnlyView.as_view(), name='admin_only'),
    path('', include(router.urls)),
]
