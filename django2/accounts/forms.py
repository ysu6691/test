from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
# from .models import User <- 직접 참조 권장 x

class CustomUserCreationForm(UserCreationForm):
    
    # class Meta(UserCreationForm.Meta):
    #     model = User <- 직접 참조하지 않기 때문에, 이렇게 사용 불가

    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        # 원래 email이라는 field가 존재하기 때문에 사용 가능
        # 기존 튜플 형태로 저장되어 있는 필드에 더하기
        fields = UserCreationForm.Meta.fields + ('email', 'first_name', 'last_name')


class CustomUserChangeForm(UserChangeForm):

    class Meta(UserChangeForm.Meta):
        model = get_user_model()
        fields = ('email', 'first_name', 'last_name')