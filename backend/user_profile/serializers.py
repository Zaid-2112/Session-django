from rest_framework import serializers
from .models import UserProfile

# Seraialzers for UserProfile model
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
