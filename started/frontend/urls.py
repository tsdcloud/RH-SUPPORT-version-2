from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name="frontend_index"),
    path('login', views.f_login, name='frontend_login'),
    path('dashboard', views.dashboard, name='frontend_dashboard'),
    path('logout', views.d_logout, name='frontend_logout'),
    path('user', views.user, name='frontend_user'),
    path('entities', views.get_entity, name='frontend_entities'),
    re_path(r'^api', views.api, name='api'),
    re_path(r'^.*', views.dashboard),
]