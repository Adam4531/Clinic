from ..visits.models import Visit
from ..employees.models import Role,Degree
from ..authorization.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa


def show_visits(request):
    visits = Visit.objects.all() #doctor=request.user
    # user = User.objects.filter()
    # data filter


    context = {
        'visit': visits,
        # 'user': user,
    }

    return render(request, 'main/showInfo.html', context)


def pdf_report_create(request):
    user = User.objects.filter()
    visit = Visit.objects.filter()
    #data filter



    template_path = 'main/pdfReport.html'

    context = {
        'user': user,
        'visit': visit
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

