from django import forms


class LoginForm(forms.Form):
    email = forms.CharField(max_length=150)
    password = forms.CharField(max_length=100)


class ApiForm(forms.Form):
    end = forms.CharField(max_length=1000)
    detail = forms.BooleanField(required=False)
    termination = forms.CharField(max_length=1000)
    pid = forms.CharField(max_length=1000, required=False)
    action = forms.CharField(max_length=1000, required=False)
    page = forms.CharField(max_length=1000, required=False)