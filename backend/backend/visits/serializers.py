from rest_framework import serializers

from ..visits.models import Dose, Medicine, Visit, Recommendation


class DoseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dose
        fields = "__all__"

    def validate(self, value):
        if value['dose'] < 0:
            raise serializers.ValidationError("Field 'dose' cannot be negative!")
        if value['dose'] == 0:
            raise serializers.ValidationError("Field 'dose' cannot be equal to zero!")
        if value['grammage'] == 0:
            raise serializers.ValidationError("Field 'grammage' cannot be empty!")
        if len(value['grammage']) > 50:
            raise serializers.ValidationError("Field 'grammage' cannot have more than 50 characters!")
        return value


class MedicineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Medicine
        fields = "__all__"

    def validate(self, value):
        if value['name'] == 0:
            raise serializers.ValidationError("Field 'name' cannot be empty!")
        if len(value['name']) > 50:
            raise serializers.ValidationError("Field 'name' cannot have more than 50 characters!")
        if value['quantity_of_tablets'] <= 0:
            raise serializers.ValidationError("Field 'quantity_of_tablets' cannot be empty or be negative number!")
        return value


class VisitSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Visit
        fields = "__all__"

    def validate(self, value):  # TODO Do we need additional validation here?
        return value


class RecommendationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recommendation
        fields = "__all__"

    def validate(self, value):
        if value['prescription_code'] == 0:
            raise serializers.ValidationError("Field 'prescription_code' cannot be empty!")
        if len(value['prescription_code']) > 11:
            raise serializers.ValidationError("Field 'prescription_code' cannot have more characters than 11 characters!")
        if value['dosage'] == 0:
            raise serializers.ValidationError("Field 'dosage' cannot be empty!")
        if len(value['dosage']) > 50:
            raise serializers.ValidationError("Field 'dosage' cannot have more characters than 50 characters!")
        return value
