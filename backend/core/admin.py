from django.contrib import admin

from .models import (
    Address,
    ConsumerProfile,
    Notification,
    Order,
    OrderItem,
    Payment,
    Review,
    User,
)


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("email", "first_name", "last_name", "role", "is_active", "is_staff", "is_superuser", "created_at")
    list_filter = ("role", "is_active", "is_staff", "is_superuser")
    ordering = ("email",)
    search_fields = ("email", "first_name", "last_name", "phone")
    readonly_fields = ("created_at", "updated_at", "last_login")
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Profile", {"fields": ("first_name", "last_name", "phone", "profile_picture_url", "role")}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important dates", {"fields": ("last_login", "created_at", "updated_at")}),
    )


@admin.register(ConsumerProfile)
class ConsumerProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "default_address", "created_at", "updated_at")
    search_fields = ("user__email",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ("label", "user", "city", "region", "country", "is_default", "created_at")
    search_fields = ("label", "line1", "city", "region", "country", "user__email")
    list_filter = ("is_default", "country")
    readonly_fields = ("created_at",)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "consumer", "delivery_address", "order_status", "payment_status", "total_amount", "placed_at", "created_at")
    list_filter = ("order_status", "payment_status")
    search_fields = ("id", "consumer__user__email")
    readonly_fields = ("created_at", "updated_at")


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ("order", "product", "farmer", "quantity", "unit_price", "subtotal", "created_at")
    search_fields = ("order__id", "product__name")
    readonly_fields = ("created_at",)


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ("order", "provider", "payment_method", "amount", "status", "paid_at", "created_at", "updated_at")
    list_filter = ("provider", "payment_method", "status")
    search_fields = ("order__id", "payment_reference", "transaction_reference")
    readonly_fields = ("created_at", "updated_at")


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("order", "product", "consumer", "farmer", "rating", "is_visible", "created_at")
    list_filter = ("is_visible",)
    search_fields = ("order__id", "product__name", "consumer__user__email")
    readonly_fields = ("created_at",)


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ("user", "type", "title", "is_read", "created_at", "read_at")
    list_filter = ("is_read", "type")
    search_fields = ("user__email", "title")
    readonly_fields = ("created_at",)
