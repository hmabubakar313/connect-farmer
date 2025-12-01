import uuid

from django.conf import settings
from django.db import models

from core.models import TimeStampedModel


class Farmer(TimeStampedModel):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="farmer_account",
        null=True,
        blank=True,
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    age = models.IntegerField(null=True, blank=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    land = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name


class FarmerProfile(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="farmer_profile",
    )
    farm_name = models.CharField(max_length=255, blank=True)
    farm_description = models.TextField(blank=True)
    location_address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100, blank=True)
    region = models.CharField(max_length=100, blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    verification_status = models.CharField(max_length=100, blank=True)
    profile_picture_url = models.URLField(max_length=500, blank=True)

    class Meta:
        db_table = "farmer_profiles"

    def __str__(self):
        return self.farm_name or f"FarmerProfile({self.user_id})"


class Category(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    parent = models.ForeignKey(
        "self",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="children",
    )
    description = models.TextField(blank=True)

    class Meta:
        db_table = "categories"

    def __str__(self):
        return self.name


class Product(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    farmer = models.ForeignKey(
        FarmerProfile,
        on_delete=models.CASCADE,
        related_name="products",
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="products",
    )
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    quality_grade = models.CharField(max_length=100, blank=True)
    price_per_unit = models.DecimalField(max_digits=10, decimal_places=2)
    unit = models.CharField(max_length=50, blank=True)
    stock_quantity = models.DecimalField(max_digits=12, decimal_places=3, null=True, blank=True)
    min_order_quantity = models.DecimalField(max_digits=12, decimal_places=3, null=True, blank=True)
    harvest_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=50, blank=True)

    class Meta:
        db_table = "products"

    def __str__(self):
        return self.name


class ProductImage(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="images",
    )
    image_url = models.URLField()
    is_primary = models.BooleanField(default=False)

    class Meta:
        db_table = "product_images"

    def __str__(self):
        return f"Image for {self.product_id}"


class FarmerDocument(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    farmer = models.ForeignKey(
        FarmerProfile,
        on_delete=models.CASCADE,
        related_name="documents",
    )
    doc_type = models.CharField(max_length=255, blank=True)
    file_url = models.URLField()
    status = models.CharField(max_length=255, blank=True)
    reviewed_by_admin = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="reviewed_documents",
    )
    reviewed_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "farmer_documents"

    def __str__(self):
        return f"Document({self.id})"
