import json
from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Todo


@login_required
def index(req):
    return render(req, "index.html")


class TodoView(LoginRequiredMixin, View):
    def get(self, req):
        # Get all tasks
        return JsonResponse({
            "ok": True,
            "todo_list": Todo.user_todo_list(req.user)
        })

    def post(self, req):
        # Create new task
        try:
            data = json.loads(req.POST)
            if "text" not in data:
                return JsonResponse({
                    "ok": False,
                    "error": "Invalid form"
                }, status=400)

            Todo(text=data["text"]).save()
            return JsonResponse({
                "ok": True,
                "todo_list": Todo.user_todo_list(req.user)
            })
        except json.JSONDecodeError:
            return JsonResponse({
                "ok": False,
                "error": "Invalid request"
            }, status=400)

    def put(self, req):
        # Edit task
        try:
            data = json.loads(req.POST)
            if "text" not in data or "id" not in data or ("text" in data and not data["text"]):
                return JsonResponse({
                    "ok": False,
                    "error": "Invalid Form"
                }, status=400)
            try:
                todo = Todo.objects.get(id=data["id"])
                todo.text = data["text"]
                todo.save()
            except ObjectDoesNotExist:
                return JsonResponse({
                    "ok": False,
                    "error": "Todo not found"
                })

            return JsonResponse({
                "ok": True,
                "todo_list": Todo.user_todo_list(req.user)
            })
        except json.JSONDecodeError:
            return JsonResponse({
                "ok": False,
                "error": "Invalid request"
            }, status=400)

    def delete(self, req):
        # Delete task
        try:
            data = json.loads(req.POST)
            if "text" not in data or "id" not in data or ("text" in data and not data["text"]):
                return JsonResponse({
                    "ok": False,
                    "error": "Invalid Form"
                }, status=400)
            try:
                todo = Todo.objects.get(id=data["id"])
                todo.delete()
                todo.save()
            except ObjectDoesNotExist:
                return JsonResponse({
                    "ok": False,
                    "error": "Todo not found"
                })

            return JsonResponse({
                "ok": True,
                "todo_list": Todo.user_todo_list(req.user)
            })
        except json.JSONDecodeError:
            return JsonResponse({
                "ok": False,
                "error": "Invalid request"
            }, status=400)

