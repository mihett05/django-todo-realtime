from django.urls import path
from .views import index, Todo

urlpatterns = [
    path("", index),
    path("todo/", Todo.as_view())
]
