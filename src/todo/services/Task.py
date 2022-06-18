from ..models import Task


def get_tasks(request):
    return Task.objects.all().filter(user=request.user)
