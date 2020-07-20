from django.shortcuts import render
from django.http import JsonResponse
from django.views import View


def index(req):
    return render(req, "index.html")


class Todo(View):
    def get(self, req):
        # Get all tasks
        pass

    def put(self, req):
        # Create new task
        pass

    def post(self, req):
        # Edit task
        pass

    def delete(self, req):
        # Delete task
        pass

