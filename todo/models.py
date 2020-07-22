from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    @classmethod
    def user_todo_list(cls, user):
        return list(cls.objects.filter(user=user).values("id", "text"))

    def __str__(self):
        return f"<Todo>{self.user.username} {self.text[:30]}{'...' if len(self.text) > 30 else ''}"
