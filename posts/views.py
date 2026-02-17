from django.http import HttpResponse


def index(request):
    return HttpResponse("posts 1")
