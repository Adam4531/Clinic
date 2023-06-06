import django_filters

from ..visits.models import Visit


class VisitFilter(django_filters.FilterSet):
    date = django_filters.CharFilter(field_name='date', lookup_expr='icontains')

    class Meta:
        model = Visit
        fields = ['date', 'patient', 'doctor']
