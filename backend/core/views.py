from django.contrib.auth import get_user_model
from rest_framework import generics, permissions, response, views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .permissions import RolePermission
from .serializers import AuthTokenObtainPairSerializer, UserSerializer

User = get_user_model()


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class LoginView(TokenObtainPairView):
    serializer_class = AuthTokenObtainPairSerializer
    permission_classes = [permissions.AllowAny]


class RefreshView(TokenRefreshView):
    permission_classes = [permissions.AllowAny]


class MeView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return response.Response(UserSerializer(request.user).data)


class AdminOnlyView(views.APIView):
    """
    Sample role-protected endpoint to demonstrate role-based access control.
    """

    permission_classes = [permissions.IsAuthenticated, RolePermission]
    required_roles = ["admin"]

    def get(self, request):
        return response.Response({"detail": "Hello admin!"})
