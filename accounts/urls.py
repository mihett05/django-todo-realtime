from django.urls import path
from django.contrib.auth.urls import urlpatterns as auth_urls
from .views import profile, register_view

urlpatterns = [
    *auth_urls,
    path("", profile, name="profile"),
    path("register/", register_view, name="register")
]
