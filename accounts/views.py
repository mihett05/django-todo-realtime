from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth import authenticate, login


def account_view(req):
    pass


def login_view(req):
    if req.user.is_authenticated:
        return redirect("account_view")


def register_view(req):
    if req.user.is_authenticated:
        return redirect("account_view")
