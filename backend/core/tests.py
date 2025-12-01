from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

User = get_user_model()


class AuthIntegrationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.password = "example-password"
        self.user = User.objects.create_user(
            email="user@example.com",
            password=self.password,
            role="consumer",
        )
        self.admin_password = "admin-password"
        self.admin = User.objects.create_user(
            email="admin@example.com",
            password=self.admin_password,
            role="admin",
        )

    def _login(self, email, password):
        return self.client.post(
            reverse("auth_login"),
            {"email": email, "password": password},
            format="json",
        )

    def test_login_returns_tokens_for_valid_credentials(self):
        response = self._login(self.user.email, self.password)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)
        self.assertEqual(response.data["user"]["email"], self.user.email)

    def test_login_rejects_invalid_credentials(self):
        response = self._login(self.user.email, "bad-password")

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_protected_route_requires_token(self):
        response = self.client.get(reverse("me"))

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_protected_route_allows_valid_token(self):
        login_response = self._login(self.user.email, self.password)
        token = login_response.data["access"]

        response = self.client.get(
            reverse("me"),
            HTTP_AUTHORIZATION=f"Bearer {token}",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["email"], self.user.email)

    def test_refresh_returns_new_access_token(self):
        login_response = self._login(self.user.email, self.password)
        refresh_token = login_response.data["refresh"]

        response = self.client.post(
            reverse("auth_token_refresh"),
            {"refresh": refresh_token},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("access", response.data)

    def test_role_protected_route_blocks_wrong_role(self):
        login_response = self._login(self.user.email, self.password)
        token = login_response.data["access"]

        response = self.client.get(
            reverse("admin_only"),
            HTTP_AUTHORIZATION=f"Bearer {token}",
        )

        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_role_protected_route_allows_admin(self):
        login_response = self._login(self.admin.email, self.admin_password)
        token = login_response.data["access"]

        response = self.client.get(
            reverse("admin_only"),
            HTTP_AUTHORIZATION=f"Bearer {token}",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["detail"], "Hello admin!")
