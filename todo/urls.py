from django.urls import path
from .views import index, TodoView

urlpatterns = [
    path("", index),
    path("todo/", TodoView.as_view())
]
