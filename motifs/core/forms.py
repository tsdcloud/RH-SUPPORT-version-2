from django import forms
from .models import Motif
from . import constants as c
from django.contrib.auth.models import User
import base64
import io
import datetime

class AddMotif(forms.Form):
    entity = forms.CharField(max_length=1000, required=True)
    nom = forms.CharField(max_length=50, required=True)
    rubrique = forms.ChoiceField(choices=c.RUBRIQUE_MOTIF, required=True)

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user')
        super(AddMotif, self).__init__(*args, **kwargs)

    def clean(self):
        entity = self.cleaned_data.get('entity')
        nom = self.cleaned_data.get('nom')
        rubrique = self.cleaned_data.get('rubrique')

        # Check if the entity exist 
        # entity_exists = c.getEntities(self.user)
        # if entity_exists.status_code == 200 :
        #     results = entity_exists
        #     pass
        return self.cleaned_data


class GetMotif(forms.Form):
    entity = forms.CharField(max_length=100)
    rubrique = forms.ChoiceField(choices=c.RUBRIQUE_MOTIF)

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user')
        super(GetMotif, self).__init__(*args, **kwargs)

    def clean(self):
        if not self.user:
            self.add_error("user", "Not Authorized")
        return self.cleaned_data


class GetMotifDetail(forms.Form):
    id = forms.CharField(max_length=100, required=True)
    rubrique = forms.ChoiceField(choices=c.RUBRIQUE_MOTIF, required=True)

    def clean(self):
        return self.cleaned_data

