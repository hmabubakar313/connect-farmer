from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIRequestFactory
from .views import FarmerProfileViewSet
from .models import FarmerProfile

User = get_user_model()

class FarmerRegistrationTest(TestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.view = FarmerProfileViewSet.as_view({'post': 'create'})
        self.url = '/api/farmers/'

    def test_create_farmer_account_atomic(self):
        """
        Ensure we can create a farmer account (User + Profile).
        """
        data = {
            "email": "farmer.joe@example.com",
            "password": "strong_password_123",
            "first_name": "Joe",
            "last_name": "Farmer",
            "farm_name": "Joe's Organic Farm",
            "location_address": "123 Farm Lane",
            "city": "Farmville",
            "region": "West"
        }
        
        request = self.factory.post(self.url, data)
        response = self.view(request)
        
        self.assertEqual(response.status_code, 201)
        
        # Check User created
        user = User.objects.get(email="farmer.joe@example.com")
        self.assertEqual(user.first_name, "Joe")
        self.assertEqual(user.role, "farmer")
        
        # Check Profile created and linked
        profile = FarmerProfile.objects.get(user=user)
        self.assertEqual(profile.farm_name, "Joe's Organic Farm")
        self.assertEqual(profile.city, "Farmville")
        
    def test_create_farmer_duplicate_email(self):
        User.objects.create_user(email="existing@example.com", password="pw")
        
        data = {
            "email": "existing@example.com",
            "password": "pw",
        }
        request = self.factory.post(self.url, data)
        response = self.view(request)
        
        self.assertEqual(response.status_code, 400)
        self.assertIn("email", response.data)
