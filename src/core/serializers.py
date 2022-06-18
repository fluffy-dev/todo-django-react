from rest_framework.serializers import ModelSerializer, Serializer, CharField
from django.contrib.auth.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'email', 'date_joined']