from rest_framework import serializers
from django.contrib.auth.models import User

# Seraialzer for User model(inbuilt)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', )
