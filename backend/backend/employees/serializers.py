import datetime

from rest_framework import serializers

from .models import Employee


# class RoleSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Role
#         fields = "__all__"
#
#     def validate(self, value):
#         if len(value['name']) == 0:
#             raise serializers.ValidationError("Field 'name' cannot be empty!")
#         if len(value['name']) > 50:
#             raise serializers.ValidationError("Field 'name' cannot be longer than 50 characters!")
#         return value
#
#
# class DegreeSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Degree
#         fields = "__all__"
#
#     def validate(self, value):
#         if len(value['name']) == 0:
#             raise serializers.ValidationError("Field 'name' cannot be empty!")
#         if len(value['name']) > 100:
#             raise serializers.ValidationError("Field 'name' cannot be longer than 100 characters!")
#         return value
#

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"

    def validate(self, value):
        # if value['employed_at'] > datetime.date.today():  # TODO check if it's correct in logic way
        #     raise serializers.ValidationError("Field 'employed_at' cannot be placed in the future")
        return value
