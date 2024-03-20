from django.utils.html import strip_tags
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
import requests
import json
END_POINT = "https://bfc.api.entity.zukulufeg.com/"
DE_END_POINT = "http://127.0.0.1:8080"
STATUT_DE_CHOICE = [
    ('1', 'waiting_for_response'),
    ('2', 'waiting_for_sanction'),
    ('3', 'waiting_witness_response'),
    ('4', 'archieved'),
    ('5', 'responded_out_of_time'),
    ('6', 'responded_on_time')
]


DE_SANCTION_STATUT = [
    ('1', 'proposition'),
    ('2', 'validation'),
]


def getEntities(token: str):
    url = END_POINT+"/firme"
    res = requests.get(url=url, headers={"Authorization": f"Bearer {token}"})
    return res.json()


def getSites(token: str):
    url = END_POINT+"/location"
    res = requests.get(url=url, headers={"Authorization": f"Bearer {token}"})
    return res.json()


def getEmployee(token: str):
   token = str(token).replace(',', '')
   url = f'{END_POINT}/employee'
   res = requests.get(url, headers={"Authorization": f"Bearer {token}"})
   return res.json()


def getMotifs(token: str, entity: str):
    url = DE_END_POINT+"/motif?entity="+entity+"&rubrique=1"
    res = requests.get(url=url, headers={"Authorization": token})
    return res.json()


def getMotifDetail(id: str, rubrique: str):
    print(id, rubrique)
    url = f"{DE_END_POINT}/motif_detail?id={id}&rubrique={rubrique}"
    print(url)
    res = requests.get(url=url)
    return res.json()
 

def perform_action(request):
    # Perform your action here

    # Get the user's email
    user_email = request.user.email

    # Compose the email subject and message
    subject = 'Action Performed Successfully'
    message = render_to_string('email_template.html', {
        'user': request.user,
        'action': 'Your action details here'
    })

    # Send the email to the user
    # send_email_to_user(user_email, subject, message)
