from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import RegistrationForm


def register_view(req):
    if req.user.is_authenticated:
        return redirect("profile_view")

    if req.method == "POST":
        form = RegistrationForm(req.POST)
        if form.is_valid():
            form.save()
            return redirect("profile_view")
    else:
        form = RegistrationForm()
    errors = form.errors.as_data()
    for field in errors:
        for i, error in enumerate(errors[field]):
            errors[field][i] = list(error)[0]

    return render(req, "accounts/register.html", {"form": form, "errors": errors})


@login_required
def profile_view(req):
    return render(req, "accounts/profile.html")
