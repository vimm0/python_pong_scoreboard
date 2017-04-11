from django.conf.urls import url,include
from django.contrib import admin

urlpatterns = [
    url(r'^', include('pong.urls')),
    url(r'^admin/', admin.site.urls),

    # url(r'^', include("pong.urls", namespace='pong')),

]
