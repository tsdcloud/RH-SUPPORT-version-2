"""de URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from demande import views as demande_views
from demande.views import DemandeListView, DemandeExplicationDetail
from reponse.views import ResponseListView, ResponseDetail
from temoins.views import TemoinsListView, TemoinsDetail
from sanction.views import SanctionListView, SanctionDetail
from proposition.views import PropositionListView, PropositionDetail
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

router = routers.DefaultRouter()


urlpatterns = [
    path('demande/',  DemandeListView.as_view(), name='demande_list'),
    path('demande/<str:pk>',  DemandeExplicationDetail.as_view(), name='demande_details'),
    path('reponse/',  ResponseListView.as_view(), name='reponse_list'),
    path('reponse/<str:pk>',  ResponseDetail.as_view(), name='reponse_details'),
    path('temoins/',  TemoinsListView.as_view(), name='temoins_list'),
    path('temoins/<str:pk>',  TemoinsDetail.as_view(), name='temoins_details'),
    path('sanction/',  SanctionListView.as_view(), name='sanction_list'),
    path('sanction/<str:pk>',  SanctionDetail.as_view(), name='saction_details'),
    path('proposition/',  PropositionListView.as_view(), name='proposition_list'),
    path('proposition/<str:pk>',  PropositionDetail.as_view(), name='proposition_details'),
    path('admin/', admin.site.urls),
]
