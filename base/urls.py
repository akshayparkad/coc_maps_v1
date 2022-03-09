from django.urls import path
from . import views

urlpatterns = [
    path('bases/', views.getBases, name="bases"),
]