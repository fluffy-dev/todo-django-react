from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import TaskSerializer
from .services.Task import get_tasks


class TaskView(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    serializer_class = TaskSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return get_tasks(self.request)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
