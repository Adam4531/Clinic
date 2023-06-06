from ..visits.models import Visit
from ..employees.models import Role,Degree
from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa


# Create your models here.
def show_visits(request):
    visit = Visit.objects.all()
    role = Role.objects.all()
    degree = Degree.objects.all()

    context = {
        'visit': visit,
        'role': role,
        'degree': degree,
    }

    return render(request, 'main/showInfo.html', context)


def pdf_report_create(request):
    visit = Visit.objects.all()
    role = Role.objects.all()
    degree = Degree.objects.all()


    template_path = 'main/pdfReport.html'

    context = {
        'visit': visit,
        'role': role,
        'degree': degree,
    }

    response = HttpResponse(content_type='application/pdf')

    response['Content-Disposition'] = 'filename="products_report.pdf"'

    template = get_template(template_path)

    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funy view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

