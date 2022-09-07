from django import forms
from .models import Article

class ArticleForm(forms.ModelForm):

    title = forms.CharField(
        label = '제목',
        widget = forms.TextInput( # django widget class
            # html 속성을 지정
            attrs={
                'class': 'my-title',
                'placeholder': 'Enter the title',
                'maxlength': 10,
            }
        ),
    )
    content = forms.CharField(
        label = '내용',
        widget = forms.Textarea(
            attrs={
                'class': 'my-content',
                'placeholder': 'Enter the content',
                'rows': 5,
                'cols': 50,
            }
        ),
        # 해당 요구사항을 충족하지 못하면, 다음 메시지를 출력
        error_messages={
            'required': 'Please enter your content'
        }
    )

    class Meta:
        model = Article # 어떤 모델을 기반으로 할지
        fields = '__all__'  # 모델 필드 중 어떤 것을 출력할지
                            # all 사용시, 필드 중 사용자의 입력을 받아야 하는 모든 필드 포함
                            # created_at, updated_at 은 포함하지 않는 것을 확인할 수 있음
                            # ('title', 'content',) 형식도 가능



# class ArticleForm(forms.Form):
    # 각 변수에 대응하는 값('kr', 'ch', 'jp')는 option의 value로 동작
    # NATION_A = 'kr'
    # NATION_B = 'ch'
    # NATION_C = 'jp'
    # NATIONS_CHOICES = [
    #     (NATION_A, '한국'),
    #     (NATION_B, '중국'),
    #     (NATION_C, '일본'),
    # ]

    # title = forms.CharField(max_length=10)
    # content = forms.CharField(widget=forms.Textarea)
    # nation = forms.ChoiceField(choices=NATIONS_CHOICES)
    # nation2 = forms.ChoiceField(choices=NATIONS_CHOICES, widget=forms.RadioSelect())