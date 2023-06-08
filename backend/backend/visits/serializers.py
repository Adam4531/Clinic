from rest_framework import serializers

from ..visits.models import Medicine, Visit, Recommendation


class MedicineSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Medicine
        fields = ["id", "name", "quantity_of_tablets", "dose", "patient"]


    def validate(self, value):
        if value['name'] == 0:
            raise serializers.ValidationError("Field 'name' cannot be empty!")
        if len(value['name']) > 50:
            raise serializers.ValidationError("Field 'name' cannot have more than 50 characters!")
        if value['quantity_of_tablets'] <= 0:
            raise serializers.ValidationError("Field 'quantity_of_tablets' cannot be empty or be negative number!")
        return value


class VisitSerializer(serializers.ModelSerializer):

    class Meta:
        model = Visit
        fields = ["id", "date", "created_at", "updated_at",
                  "description", "is_confirmed", "patient", "doctor"]

    def get_patient(self, obj):
        patient = obj.patient
        return {
            "id": patient.id,
            "first_name": patient.first_name,
            "last_name": patient.last_name,
            "pesel": patient.pesel,
            "email": patient.email
        }

    def get_doctor(self, obj):
        doctor = obj.doctor
        return {
            "id": doctor.id,
            "first_name": doctor.first_name,
            "last_name": doctor.last_name,
            "specialization": doctor.specialization,
            "email": doctor.email
        }

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['patient'] = self.get_patient(instance)
        representation['doctor'] = self.get_doctor(instance)
        return representation

    def validate(self, value):
        return value


class RecommendationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recommendation
        fields = ['id', 'prescription_code', 'description', 'dosage', 'additional_information', 'patient', 'visit', 'doctor']

    def get_patient(self, obj):
        try:
            patient = obj.patient
            return {
                "id": patient.id,
                "first_name": patient.first_name,
                "last_name": patient.last_name,
                "pesel": patient.pesel,
            }
        except patient.DoesNotExist:
            return None

    def get_visit(self, obj):
        visit = obj.visit
        return {
            "id": visit.id,
            "date": visit.date,
            "description": visit.description,
            "is_confirmed": visit.is_confirmed,
        }

    def get_doctor(self, obj):
        doctor = obj.doctor
        return {
            "id": doctor.id,
            "first_name": doctor.first_name,
            "last_name": doctor.last_name,
            "specialization": doctor.specialization,
            "email": doctor.email
        }

    def to_representation(self, instance):
        representation = super(RecommendationSerializer, self).to_representation(instance)
        representation['patient'] = self.get_patient(instance)
        representation['visit'] = self.get_visit(instance)
        representation['doctor'] = self.get_doctor(instance)
        return representation

    def validate(self, value):
        if value['prescription_code'] == 0:
            raise serializers.ValidationError("Field 'prescription_code' cannot be empty!")
        if len(value['prescription_code']) > 11:
            raise serializers.ValidationError(
                "Field 'prescription_code' cannot have more characters than 11 characters!")
        if value['dosage'] == 0:
            raise serializers.ValidationError("Field 'dosage' cannot be empty!")
        if len(value['dosage']) > 50:
            raise serializers.ValidationError("Field 'dosage' cannot have more characters than 50 characters!")
        return value
