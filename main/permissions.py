from rest_framework.permissions import BasePermission

class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        return bool((request.user and request.user.is_superuser) or (request.user and request.user.role == 0))