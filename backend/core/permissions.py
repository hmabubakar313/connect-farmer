from rest_framework.permissions import BasePermission


class RolePermission(BasePermission):
    """
    Allows access only to users whose role appears in view.required_roles.
    If required_roles is not set, the permission is neutral (returns True).
    """

    def has_permission(self, request, view):
        required_roles = getattr(view, "required_roles", None)
        if not required_roles:
            return True

        user = request.user
        if not user or not user.is_authenticated:
            return False

        return user.role in required_roles
