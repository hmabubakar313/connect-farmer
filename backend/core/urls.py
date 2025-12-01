from django.urls import path

from .views import AdminOnlyView, LoginView, MeView, RefreshView, RegisterView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='auth_login'),
    path('refresh/', RefreshView.as_view(), name='auth_token_refresh'),
    path('me/', MeView.as_view(), name='me'),
    path('admin-only/', AdminOnlyView.as_view(), name='admin_only'),
]
