from rest_framework import serializers

from ..patients.models import Allergy, Time_of_activity


class AllergySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Allergy
        fields = "__all__"

    def validate(self, value):
        if value['name'] == 0:
            raise serializers.ValidationError("Field 'name' cannot be empty!")
        if len(value['name']) > 45:
            raise serializers.ValidationError("Field 'name' cannot have more than 11 characters!")
        return value


class TimeOfActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Time_of_activity
        fields = "__all__"

    def validate(self, value):
        if value['date_start'] > value['date_end']:
            raise serializers.ValidationError("Field 'date_start' cannot be placed after date_end!")
        return value
