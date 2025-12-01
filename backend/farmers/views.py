from rest_framework import viewsets
from .models import Farmer
from .serializers import FarmerSerializer
from rest_framework.permissions import IsAuthenticated

class FarmerViewSet(viewsets.ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer
    permission_classes = [IsAuthenticated]
