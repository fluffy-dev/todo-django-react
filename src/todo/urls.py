from rest_framework import routers
from todo import views

router = routers.DefaultRouter()
router.register(r'todos', views.TaskView, 'todo')

urlpatterns = []
urlpatterns += router.urls
