import http.client
import json
import asyncio
import requests
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from frontend.constancies import ENDPOINT_CAREER, ENDPOINT_PORT, ENDPOINT_USER, ENDPOINT_ENTITY, ENDPOINT_MOTIFS, ENDPOINT_DEMANDES
from frontend.forms import ApiForm, LoginForm
import re
from frontend.models import Profil


# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def fix_link(link):
    # Define a regular expression pattern to match more than one consecutive "/"
    pattern = r'/{2,}'
    
    # Use re.sub to replace consecutive "/" with a single "/"
    fixed_link = re.sub(pattern, '/', link)
    return fixed_link


def get_profile(token:str, id:str):
      """
        Fetches employee data from the Entity, the API uses the provided token.

        Args:
            token: The authentication token for the API.

        Returns:
            The entity data dictionary on success (status code 200), 
            or None on failure.
      """
        
      url = "https://"+ENDPOINT_ENTITY+"/firm/"+id+"/employee/" 
      headers = {"Authorization": f"Bearer {token}"}

      try:
         response = requests.get(url, headers=headers)
         response.raise_for_status()
         return response.json()
      except requests.exceptions.RequestException as e:
         print(f"Error fetching employee data: {e}")
         return None

@csrf_exempt
def get_entity(request):
  """
  Fetches entity data from the API using the provided token.

  Args:
      token: The authentication token for the API.

  Returns:
      The entity data dictionary on success (status code 200), 
      or None on failure.
  """
#   url = "http://your-api-domain/api?end=entity&detail=0&termination=firm&action="
  profil = []
  url = "https://"+ENDPOINT_ENTITY+"/firm/"
  headers = {
        "Authorization": 'Bearer ' + request.user.profil.access,
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }

  try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    if response.status_code == 200:
        return JsonResponse(data=response.json(), status=200)
    else:
        return JsonResponse(data={"message": "something wrong happen"}, status=401)
    # return response.json()
  except requests.exceptions.RequestException as e:
    print(f"Error fetching entity data: {e}")
    return JsonResponse(data={"message": "something wrong happen"}, status=401)
  

def get_info_user(token:str):
  """
  Fetches user information and entity data, stores user data in localStorage.

  Raises:
      RuntimeError: If the user data fetch fails with a non-200 status code.
  """
  profiles = []
  url = "https://"+ENDPOINT_USER+"/users/account/"  # Replace with your API domain
  headers = {"Authorization": f"Bearer {token}"}
  try:
    response = requests.get(url, headers=headers)
    #response.raise_for_status()  # Raise exception for non-200 status codes
    data = response.json()
    entities = get_entity(token)  # Use get to handle missing key
    print(entities.get("results"))
    # for entity in entities:
    #     profile = get_profile(id=entity.id, token=token)
    #     profiles.append(profile, None)
    for entity in entities.get("results"):
        profile = get_profile(id=entity.get("id"), token=token)
        profiles.append(profile)
        # print(entity["id"])
        print(entity.get("id"))

    # entity = get_entity(data.get("access"))  # Use get to handle missing key
    if response.status_code == 200:
      user_profile = {**data, "entity": entities.get("results", [])}  # Use get for missing key
      return user_profile
    else:
      raise RuntimeError("Failed to fetch user info (non-200 status)")
  except requests.exceptions.RequestException as e:
    print(f"Error fetching user info: {e}")
    raise RuntimeError("Failed to fetch user info") from e

def connect(email: str, password: str):

    headers = {
        'Content-Type': 'application/json'
    }

    payload = {
        "username": email,
        "password": password
    }

    try:
        conn = http.client.HTTPSConnection(ENDPOINT_USER)
        payload = json.dumps(payload)

        conn.request("POST", "/api/token/", payload, headers)
        res = conn.getresponse()
        e = res.read()
        try:
            data = json.loads(e.decode('utf8').replace("'", '"'))
        except:
            data = json.loads(e)
    except:
        response = requests.request("POST", ENDPOINT_USER + 'api/token/', headers=headers, data=payload)
        data = response
    return data

@csrf_exempt
def f_login(request):
    payload = json.loads(request.body)
    if request.method == 'GET':
        return redirect(reverse('frontend_index'))
    else:
        form = LoginForm(payload)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            res = connect(email=email, password=password)
            user_info = get_info_user(res['access'])

            try:
                user = User.objects.get(username=email)
            except User.DoesNotExist:
                user = User.objects.create_user(
                    username=email,
                    password=password
                )

            if not hasattr(user, 'profil') :
                profil = Profil()
                profil.access = "e"
                profil.refresh = "e"
                profil.user = user
                profil.save()

            user.profil.access = res["access"]
            user.profil.refresh = res['refresh']
            user.profil.save()

            if user.is_active:
                user = authenticate(
                    request,
                    username=email,
                    password=password
                )

                login(request, user)
                return JsonResponse(data=user_info, status=200)
                
            else:
                messages.warning(request, 'Compte suspendu')
                return JsonResponse(data={"detail":"Compte suspendu"}, status=403)
        else:
            messages.error(
                request,
                "Veuillez compléter le formulaire ci-dessus"
            )
            return JsonResponse(data={"detail":"Veuillez compléter le formulaire ci-dessus"}, status=401)


@login_required(login_url='/')
def d_logout(request):
    return render(request, 'frontend/index.html')

@csrf_exempt
def user(request):
    conn = http.client.HTTPSConnection(ENDPOINT_USER)
    payload = ''
    headers = {
        "Authorization": 'Bearer ' + request.user.profil.access
    }
    conn.request("GET", "/users/account/", payload, headers)
    response = conn.getresponse()
    if response.status == 401:
        logout(request=request)
        return JsonResponse({"status": 401}, 401)
    else:
        data = json.loads(response.read())
        data['access'] = request.user.profil.access
    
    return JsonResponse(data, status=response.status)

@login_required(login_url='/')
def dashboard(request):
    return render(request, 'frontend/index.html')

# @login_required(login_url='/')
@csrf_exempt
def api(request):
    data = {"status": 400}
    status = 400
    if request.method == "GET":

        form = ApiForm(request.GET)
        payload = '?page=2'
        verb = 'GET'
    else:

        charge = json.loads(request.body)
        form = ApiForm(charge)
        payload = json.dumps(charge)

        if charge:
            payload = json.dumps(charge)
        verb = request.method

    if form.is_valid():
        end = form.cleaned_data['end']
        detail = form.cleaned_data['detail']
        termination = form.cleaned_data['termination']
        pid = form.cleaned_data.get('pid', 'abc')
        action = form.cleaned_data.get('action', '')
        page = form.cleaned_data.get('page', 1)

        if end == 'career':
            endpoint = ENDPOINT_CAREER
        elif end == 'entity':
            endpoint = ENDPOINT_ENTITY
        elif end == 'port':
            endpoint = ENDPOINT_PORT
        elif end == 'motifs':
            endpoint = ENDPOINT_MOTIFS
        elif end == 'demandes':
            endpoint = ENDPOINT_DEMANDES
        else:
            endpoint = ENDPOINT_USER

        headers = {
            "Authorization": 'Bearer ' + request.user.profil.access,
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }

        if detail is True:
            url = "/" + str(termination) + "/" + str(pid) + "/" + str(action)
        elif action:
            url = "/" + str(termination) + "/" + str(action)
            print(action)
        else:
            url = "/"+str(termination)
            pass
        if page not in [1, '1', '']:
            url += '?page=' + str(page)

        try:
            conn = http.client.HTTPSConnection(endpoint)
            conn.request(verb, url, payload, headers)
            response = conn.getresponse()
            status = response.status
            data = json.loads(response.read())
        except:
            # url = fix_link(endpoint + url)
            url = 'http://' + endpoint + url
            urls = url.split('//')
            url = urls[0] + '//' + urls[1] + '/'
            if url.endswith("//"):
                url = url.removesuffix("//")
            if request.method == "GET":
                response = requests.get(url=url, headers=headers)
            elif request.method == "POST":
                response = requests.post(url=url, headers=headers, data=payload)
                print(url)
            else:
                response = requests.post(url=url, headers=headers, data=payload)

            status = response.status_code

            if response.ok:
                data = response.json()  

        try:
            data['status'] = status
            data['url'] = url
        except:
            data = {
                "results": data,
                "status": status,
                "url": url
            }
    else:
        data['errors'] = {
            "end": form['end'].errors,
            "detail": form['detail'].errors,
            "termination": form['termination'].errors,
            "id": form['pid'].errors,
            "action": form['action'].errors,
            "verb": verb
        }
    return JsonResponse(data, status=status)
