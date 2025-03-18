from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from . import views

urlpatterns = [
    path('addcourse',views.add_course,name='add_course'),
    path('listcourse',views.list_course,name='list_course'),
    path('deletecourse',views.delete_course,name='delete_course'),
   # path('admin/', admin.site.urls),
]
