import re
from django.shortcuts import render, redirect
from .models import Article
from .forms import ArticleForm
from django.views.decorators.http import require_http_methods, require_POST, require_safe


# Create your views here.
# GET인 요청에만 함수 실행하도록 설정
@require_safe
def index(request):
    # DB에 전체 데이터를 조회
    articles = Article.objects.all()
    context = {
        'articles': articles,
    }
    return render(request, 'articles/index.html', context)

@require_http_methods(['GET', 'POST'])
def create(request):
    # POST일 떄와 아닐 때를 나누는 이유: DB에 영향을 주는지 아닌지
    # method가 POST일 때는 DB와 연관이 있는 로직
    if request.method == 'POST':
        form = ArticleForm(request.POST) # 인스턴스 생성
        if form.is_valid():
            article = form.save() # 저장된 값을 반환
            return redirect('articles:detail', article.pk)
    # POST가 아닌 모든 method은 DB와 연관이 없는 로직
    else:
        form = ArticleForm()
    # is_valid를 통과하지 못하면 여기로 와야함
    context = {
        'form': form,
    }
    return render(request, 'articles/create.html', context) # redirect와 render의 인자 차이 알아보기

@require_safe
def detail(request, pk):
    # variable routing으로 받은 pk 값으로 데이터를 조회
    article = Article.objects.get(pk=pk)
    context = {
        'article': article,
    }
    return render(request, 'articles/detail.html', context)

@require_POST
def delete(request, pk):
    article = Article.objects.get(pk=pk)
    # delete도 DB에 영향을 주기 때문에, POST인지 확인
    # if request.method == 'POST': # @require_POST 사용했기 떄문에, 필요없어짐
    article.delete()
    return redirect('articles:index')
    # return redirect('articles:detail', article.pk) # 얘도 필요 없어짐

@require_http_methods(['GET', 'POST'])
def update(request, pk):
    article = Article.objects.get(pk=pk)
    if request.method == 'POST':
        # 클래스의 첫번째 인자는 data이기 때문에, 'data='는 생략 가능
        # 하지만 두번째 인자는 instance가 아니기 때문에, 'instance='는 생략 불가
        form = ArticleForm(request.POST, instance=article)
        if form.is_valid():
            form.save()
            return redirect('articles:detail', article.pk)
    else:
        form = ArticleForm(instance=article)
    context = {
        'article': article,
        'form': form,
    }
    return render(request, 'articles/update.html', context)