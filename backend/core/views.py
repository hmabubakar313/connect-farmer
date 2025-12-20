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


from rest_framework import mixins, viewsets
from drf_spectacular.utils import extend_schema, extend_schema_view
from .models import ConsumerProfile
from .serializers import ConsumerProfileSerializer, ConsumerRegistrationSerializer
from .permissions import IsProfileOwnerOrReadOnly

@extend_schema_view(
    create=extend_schema(summary="Register Consumer", description="Create a new User account with Consumer role and a linked Profile."),
    retrieve=extend_schema(summary="Get Profile", description="Retrieve details of a specific consumer profile."),
    update=extend_schema(summary="Update Profile", description="Update details of your consumer profile."),
    partial_update=extend_schema(summary="Partial Update Profile", description="Partially update details of your consumer profile."),
    destroy=extend_schema(summary="Delete Profile", description="Delete your consumer account and profile.")
)
@extend_schema(tags=["Consumers"])
class ConsumerProfileViewSet(mixins.CreateModelMixin,
                             mixins.RetrieveModelMixin,
                             mixins.UpdateModelMixin,
                             mixins.DestroyModelMixin,
                             viewsets.GenericViewSet):
    """
    ViewSet for viewing and editing Consumer profiles.
    Create action handles registration (User + Profile).
    Listing is DISABLED.
    """
    queryset = ConsumerProfile.objects.all()
    
    def get_serializer_class(self):
        if self.action == "create":
            return ConsumerRegistrationSerializer
        return ConsumerProfileSerializer

    def get_permissions(self):
        if self.action == "create":
            return [permissions.AllowAny()]
        # For Retrieve, Update, Delete: User must be authenticated AND (if modifying) be the owner
        return [permissions.IsAuthenticated(), IsProfileOwnerOrReadOnly()]

