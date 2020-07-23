import json
from channels.generic.websocket import AsyncWebsocketConsumer


class TodoConsumer(AsyncWebsocketConsumer):
    connections = dict()

    async def connect(self):
        await self.accept()
        user = self.scope["user"]
        if user not in TodoConsumer.connections:
            TodoConsumer.connections[user] = []
        TodoConsumer.connections[user].append(self)

    async def disconnect(self, code):
        user = self.scope["user"]
        if user in TodoConsumer.connections:
            TodoConsumer.connections[user].remove(self)
