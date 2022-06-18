from django.contrib import admin
from .models import Task


class TasksAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed', 'user')


admin.site.register(Task, TasksAdmin)
