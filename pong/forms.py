from django import forms
from .models import Match

class MatchForm(forms.ModelForm):

    class Meta:
        model = Match
        fields = ['player_one','player_two']