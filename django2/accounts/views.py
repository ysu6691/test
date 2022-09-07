from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm, PasswordChangeForm
from django.contrib.auth import login as auth_login # 우리가 설정한 login 함수와 이름이 동일해, 바꿔줘야 함
from django.contrib.auth import logout as auth_logout 
# from django.contrib.auth.forms import UserCreationForm <- 사용 x (custom 사용)
from .forms import CustomUserCreationForm, CustomUserChangeForm
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth import get_user_model

# Create your views here.
def account_info(request):
    users = get_user_model().objects.all()
    context = {
        'users' : users,
    }
    return render(request, 'accounts/account_info.html', context)

def login(request):
    if request.user.is_authenticated:
        return redirect('articles:index')

    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST) # model form이 아니기 때문에, 첫번째 인자로 request를 받음
        if form.is_valid():
            # 로그인
            # auth_login(request, 유저정보(AuthenticationForm에서 제공하는 함수))
            auth_login(request, form.get_user())
            return redirect(request.GET.get('next') or 'articles:index')
                            # 'next'가 존재하면 next로, 아니면 index로 (단축평가)
    else:
        form = AuthenticationForm()
    context = {
        'form' : form
    }
    return render(request, 'accounts/login.html', context)


def logout(request):
    auth_logout(request)
    return redirect('articles:index')

# 얘는 model form (DB에 저장을 함) <- <- <- 중요
def signup(request):
    if request.method == "POST":
        # form = UserCreationForm(request.POST)
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save() # 저장된 객체를 return
            auth_login(request, user)
            # auth_login(request, form.get_user()) <- 여기서 form은 AuthenticationForm의 인스턴스이므로 사용 불가
            return redirect('articles:index')
    else:
        # form = UserCreationForm()
        form = CustomUserCreationForm()
    context = {
        'form' : form
    }
    return render(request, 'accounts/signup.html', context)

def delete(request):
    request.user.delete()
    auth_logout(request)
    return redirect('articles:index')

def update(request):
    if request.method == "POST":
        form = CustomUserChangeForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('articles:index')
    else:
        form = CustomUserChangeForm(instance=request.user)
    context = {
        'form' : form
    }
    return render(request, 'accounts/update.html', context)

def change_password(request):
    if request.method == "POST":
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            # user = form.save()
            # update_session_auth_hash(request, user)
            # 도 가능하지만, 아래 방식을 권장
            form.save()
            update_session_auth_hash(request, form.user)
            return redirect('articles:index')
    else:
        form = PasswordChangeForm(request.user)
    context = {
        'form' : form
    }
    return render(request, 'accounts/change_password.html', context)