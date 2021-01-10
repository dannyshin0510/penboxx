from django.forms import ModelForm

from .models import Pen


class PenForm(ModelForm):
    class Meta:
        model = Pen
        fields = '__all__'