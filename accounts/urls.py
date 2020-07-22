from django.urls import path
from django.contrib.auth.urls import urlpatterns as auth_urls
from .views import profile_view, register_view

urlpatterns = [
    *auth_urls,
    path("profile/", profile_view, name="profile"),
    path("register/", register_view, name="register")
]
