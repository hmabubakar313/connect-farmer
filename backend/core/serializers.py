from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = (
            "id",
            "first_name",
            "last_name",
            "email",
            "role",
            "phone",
            "profile_picture_url",
            "password",
        )
        read_only_fields = ("id",)

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        user = User(**validated_data)
        if password:
            user.set_password(password)
        user.save()
        return user


class AuthTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    SimpleJWT serializer that returns user details alongside the tokens.
    """


from django.db import transaction
from .models import ConsumerProfile

class ConsumerProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source="user.email", read_only=True)
    first_name = serializers.CharField(source="user.first_name", read_only=True)
    last_name = serializers.CharField(source="user.last_name", read_only=True)

    class Meta:
        model = ConsumerProfile
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "profile_picture_url",
            "default_address",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]


class ConsumerRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True, style={"input_type": "password"})
    first_name = serializers.CharField(write_only=True, required=False)
    last_name = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = ConsumerProfile
        fields = [
            "email",
            "password",
            "first_name",
            "last_name",
            # Add other profile specific fields if needed
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
                role="consumer",  # Ensure role is set to consumer
            )

            # Create ConsumerProfile linked to User
            consumer_profile = ConsumerProfile.objects.create(
                user=user,
                **validated_data
            )

        return consumer_profile

