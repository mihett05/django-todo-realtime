from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import index, TodoView

urlpatterns = [
    path("", index),
    path("todo/", login_required(TodoView.as_view()))
]
