from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainSerializer

from .models import User


class UserSerializer(serializers.ModelSerializer):
    # recommendations = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='recommendation-detail')
    visits = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='visit-detail')

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'password', 'email', 'is_staff', 'is_receptionist','age','phone_number', 'allergies','visits']
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
        # FIXME validation bellow trigger a KeyError due unknown data like 'pesel' etc.
        # if len(value['pesel']) != 11:
        #     raise serializers.ValidationError("Field 'pesel' has to be exactly 11 characters long!")
        # if len(value['phone_number']) != 9:
        #     raise serializers.ValidationError("Field 'phone_number' has to be exactly 9 characters long!")
        # if value['age'] <= 0:
        #     raise serializers.ValidationError("Field 'age' cannot be empty or negative number!")
        # if value['age'] > 100:
        #     raise serializers.ValidationError("Field 'age' cannot be than 100 number!")
        return value


class TokenObtainPairSerializer(TokenObtainSerializer):
    @classmethod
    def get_token(cls, user):
        return
