from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainSerializer

from .models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # recommendations = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='recommendation-detail')
    # visits = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='visit-detail')
    # medicines = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='medicine-detail')

    # recommendations = serializers.SlugRelatedField(many=True, read_only=True, view_name='')
    # visits = serializers.SlugRelatedField(many=True, read_only=True, view_name='visit-detail')
    medicines = serializers.SlugRelatedField(many=True, read_only=True, slug_field='name')
    # allergies = serializers.StringRelatedField(many=True)

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'password', 'email', 'pesel', 'is_staff', 'is_receptionist',
                  'phone_number', 'allergies','medicines']
        # 'visits','recommendations'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def validate(self, value):
        if value['email'] == 0:
            raise serializers.ValidationError("Email field can not be empty!")
        if len(value['email']) > 50:
            raise serializers.ValidationError("Email field can have maximum 50 characters!")
        if value['first_name'] == 0:
            raise serializers.ValidationError("First name field can not be empty!")
        if len(value['first_name']) > 50:
            raise serializers.ValidationError("First name field can have maximum 50 characters!")
        if value['last_name'] == 0:
            raise serializers.ValidationError("Last name field can not be empty!")
        if len(value['last_name']) > 50:
            raise serializers.ValidationError("Last name field can have maximum 50 characters!")
        return value


class TokenObtainPairSerializer(TokenObtainSerializer):
    @classmethod
    def get_token(cls, user):
        return
