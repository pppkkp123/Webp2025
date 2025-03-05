from django.urls import path
from . import views

urlpatterns = [
    path('', views.HelloApiView.as_view(), name='index'),  # 確保 `views.index` 存在
]
