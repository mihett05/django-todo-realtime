import json

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from asgiref.sync import async_to_sync

from .models import Todo
from .consumers import TodoConsumer


@receiver([post_save, post_delete], sender=Todo)
def update_or_create(sender, instance, **kwargs):
    conns = TodoConsumer.connections.get(instance.user)
    if isinstance(conns, list):
        buff = conns.copy()  # Avoid runtime error

        if "created" in kwargs:
            msg = {
                "type": "create" if kwargs.get("created", False) else "edit",
                "task": {
                    "id": instance.serializable_value("id"),
                    "text": instance.serializable_value("text")
                }
            }
        else:
            msg = {
                "type": "delete",
                "task": {
                    "id": instance.serializable_value("id")
                }
            }
        data = json.dumps(msg)

        for conn in buff:

            async_to_sync(conn.send)(data)
