from django.contrib import admin
from django.urls import path, include
from core import views as motif_views
from core.views import MotifList, MotifDetail
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

router = routers.DefaultRouter()
# router.register(r'motifs', MotifViewSet.as_view())

urlpatterns = [
    # path('', include(router.urls)),
    path('admin/', admin.site.urls),
    # Motifs Routes
    # # path('motif_detail/',  motif_views.motifs_detail, name='motif_detail'),
    path('motifs/',  MotifList.as_view(), name='motif'),
    path('motifs/<str:pk>',  MotifDetail.as_view(), name='get_motif_detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)