from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from . import views

urlpatterns = [
    path('add',views.add_post,name='add_post'),
    path('list',views.list_post,name='list_post'),
   # path('admin/', admin.site.urls),
]
