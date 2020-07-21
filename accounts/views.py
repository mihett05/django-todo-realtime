from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import RegistrationForm


def register_view(req):
    if req.user.is_authenticated:
        return redirect("profile")

    if req.method == "POST":
        form = RegistrationForm(req.POST)
        if form.is_valid():
            form.save()
            return redirect("profile")
    else:
        form = RegistrationForm()

    return render(req, "accounts/register.html", {"form": form, "errors": form.errors.as_data()})


@login_required
def profile(req):
    return render(req, "accounts/profile.html")
