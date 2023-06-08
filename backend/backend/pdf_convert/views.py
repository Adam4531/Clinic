import datetime

from ..visits.models import Visit
from ..employees.models import Role,Degree
from ..authorization.models import User
from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
from datetime import date


def show_visits(request):
    today = date.today()
    visits = Visit.objects.filter(date__year=today.year, date__month=today.month, date__day=today.day) #doctor=request.user
    # print(visits)


    context = {
        'visits': visits,
    }

    return render(request, 'main/showInfo.html', context)


def pdf_report_create(request):
    today = date.today()
    visits = Visit.objects.filter(date__year=today.year, date__month=today.month,
                                  date__day=today.day)

    template_path = 'main/pdfReport.html'

    context = {
        'visits': visits,
    }

    response = HttpResponse(content_type='application/pdf')

    response['Content-Disposition'] = 'filename="today_visits_report.pdf"'

    template = get_template(template_path)

    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funy view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response


def show_visits_by_id(request, id):
    today = date.today()
    visits = Visit.objects.filter(date__year=today.year, date__month=today.month, date__day=today.day, doctor__id=id) #doctor=request.user

    context = {
        'visits': visits,
    }

    return render(request, 'main/showInfo.html', context)


def pdf_report_create_by_id(request, id):
    today = date.today()
    visits = Visit.objects.filter(date__year=today.year, date__month=today.month,
                                  date__day=today.day, doctor__id=id)

    template_path = 'main/pdfReport.html'

    context = {
        'visits': visits,
    }

    response = HttpResponse(content_type='application/pdf')

    response['Content-Disposition'] = 'filename="today_visits_report.pdf"'

    template = get_template(template_path)

    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funy view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response


