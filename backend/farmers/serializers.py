from django.contrib.auth import get_user_model
from django.db import transaction
from rest_framework import serializers

from .models import FarmerProfile

User = get_user_model()


class FarmerProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source="user.email", read_only=True)
    first_name = serializers.CharField(source="user.first_name", read_only=True)
    last_name = serializers.CharField(source="user.last_name", read_only=True)
    
    class Meta:
        model = FarmerProfile
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "farm_name",
            "farm_description",
            "location_address",
            "city",
            "region",
            "latitude",
            "longitude",
            "is_verified",
            "verification_status",
            "profile_picture_url",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["is_verified", "verification_status", "id", "created_at", "updated_at"]


class FarmerRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True, style={"input_type": "password"})
    first_name = serializers.CharField(write_only=True, required=False)
    last_name = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = FarmerProfile
        fields = [
            "email",
            "password",
            "first_name",
            "last_name",
            "farm_name",
            "farm_description",
            "location_address",
            "city",
            "region",
        ]

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        email = validated_data.pop("email")
        password = validated_data.pop("password")
        first_name = validated_data.pop("first_name", "")
        last_name = validated_data.pop("last_name", "")

        with transaction.atomic():
            # Create User
            user = User.objects.create_user(
                email=email,
                password=password,
                first_name=first_name,
                last_name=last_name,
                role="farmer",  # Ensure role is set to farmer
            )

            # Create FarmerProfile linked to User
            farmer_profile = FarmerProfile.objects.create(
                user=user,
                **validated_data
            )

        return farmer_profile
