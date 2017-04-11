from django.conf.urls import url,include
from django.contrib import admin
from .views import  score_board, create_match,player_history

urlpatterns = [
    url(r'^$', create_match),
    url(r'^match/$', score_board),
    url(r'^history/$', player_history),
    url(r'^match/(?P<pk>[0-9]+)/$', score_board),
]