from django.contrib import admin

from .models import (
    Category,
    # Farmer,
    FarmerDocument,
    FarmerProfile,
    Product,
    ProductImage,
)


# @admin.register(Farmer)
# class FarmerAdmin(admin.ModelAdmin):
#     list_display = ("name", "location", "age", "land", "created_at", "updated_at")
#     search_fields = ("name", "location")
#     readonly_fields = ("created_at", "updated_at")


@admin.register(FarmerProfile)
class FarmerProfileAdmin(admin.ModelAdmin):
    list_display = ("farm_name", "user", "city", "region", "is_verified", "verification_status", "created_at", "updated_at")
    search_fields = ("farm_name", "user__email", "city", "region")
    list_filter = ("is_verified",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "parent", "created_at", "updated_at")
    search_fields = ("name",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "farmer", "category", "price_per_unit", "stock_quantity", "status", "created_at", "updated_at")
    search_fields = ("name", "farmer__farm_name")
    list_filter = ("status",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ("product", "image_url", "is_primary", "created_at", "updated_at")
    list_filter = ("is_primary",)
    search_fields = ("product__name",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(FarmerDocument)
class FarmerDocumentAdmin(admin.ModelAdmin):
    list_display = ("farmer", "doc_type", "status", "reviewed_by_admin", "reviewed_at", "created_at")
    search_fields = ("farmer__farm_name", "doc_type")
    list_filter = ("status",)
    readonly_fields = ("created_at",)
