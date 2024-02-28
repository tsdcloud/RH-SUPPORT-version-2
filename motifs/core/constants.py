import requests
import json
ENTITY_END_POINT = "https://bfc.api.entity.zukulufeg.com"


RUBRIQUE_MOTIF=[
    ('demande_explication','DE'),
    ('demande_permission_absence','DPA'),
    ('conge','conge')
]


def getEntities(token: str):
    token = str(token).replace(',', '')
    url = ENTITY_END_POINT+"/firm"
    res = requests.get(url=url, headers={"Authorization": str(token)})
    return res


def getSites(token: str, entity_id: str):
    token = str(token).replace(',', '')
    url = ENTITY_END_POINT+"/site?entity="+entity_id
    res = requests.get(url=url, headers={"Authorization": token})
    return res.json()


def getEmployee(token: str, site: str):
    token = str(token).replace(',', '')
    url = ENTITY_END_POINT+"/employer?site="+site
    res = requests.get(url=url, headers={"Authorization": token})
    return res.json()
