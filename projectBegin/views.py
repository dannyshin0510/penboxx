from django.shortcuts import render, redirect
from .forms import CreateUserForm, SuggestionForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from accounts.models import Profile, Forms
from django.contrib.auth.models import User


def registerPage(request):
    """
        Render page to allow users to register new accounts

        param: request
    """
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():

                form.save()
                user = form.cleaned_data.get('username')
                Profile.objects.create(user=User.objects.get(username=user), name=user)
                messages.success(request, 'Account was created for ' + user)
                return redirect('login')
        context = {'form': form}
        return render(request, 'register.html', context)


def loginPage(request):
    """
        Render page to allow users to login

        param: request
    """
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password =request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Username or password is incorrect')
        context = {}
        return render(request, 'login.html', context)


def logoutUser(request):
    """
        Logout of session

        param: request
    """
    logout(request)
    return redirect('login')


@login_required(login_url='login')
def renderHome(request):
    """
        Render landing page w/ login decorator

        param: request
    """
    return render(request, 'index.html')


@login_required(login_url='login')
def renderForm (request):
    """
        Render form for monthly submissions w/ login decorator

        param: request
    """
    form = SuggestionForm()
    context = {'form': form, 'msg': ''}
    selectedForms = Forms.objects.filter(user=request.user)

    if len(selectedForms) > 0:
        context = {'msg': 'Sorry. Only 1 submissions per month!'}
    if request.method == 'POST':
        form = SuggestionForm(request.POST, request.FILES)
        if form.is_valid():
            curr = form.save()
            curr.user = request.user
            curr.save()
        return redirect('home')
    return render(request, 'submission.html', context=context)












