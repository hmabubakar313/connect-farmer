from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema, extend_schema_view

from .models import FarmerProfile
from .serializers import FarmerProfileSerializer, FarmerRegistrationSerializer
from core.permissions import IsProfileOwnerOrReadOnly


@extend_schema_view(
    create=extend_schema(summary="Register Farmer", description="Create a new User account with Farmer role and a linked Profile."),
    retrieve=extend_schema(summary="Get Profile", description="Retrieve details of a specific farmer profile."),
    update=extend_schema(summary="Update Profile", description="Update details of your farmer profile."),
    partial_update=extend_schema(summary="Partial Update Profile", description="Partially update details of your farmer profile."),
    destroy=extend_schema(summary="Delete Profile", description="Delete your farmer account and profile.")
)
@extend_schema(tags=["Farmers"])
class FarmerProfileViewSet(mixins.CreateModelMixin,
                           mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           viewsets.GenericViewSet):
    """
    ViewSet for viewing and editing Farmer profiles.
    Create action handles registration (User + Profile).
    Listing is DISABLED.
    """
    queryset = FarmerProfile.objects.all()
    
    def get_serializer_class(self):
        if self.action == "create":
            return FarmerRegistrationSerializer
        return FarmerProfileSerializer

    def get_permissions(self):
        if self.action == "create":
            return [AllowAny()]
        # For Retrieve, Update, Delete: User must be authenticated AND (if modifying) be the owner
        return [IsAuthenticated(), IsProfileOwnerOrReadOnly()]
