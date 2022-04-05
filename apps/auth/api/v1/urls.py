from django.urls import path
from .views import UserRegisterViewSet, UserLoginViewSet


urlpatterns = [
    path('auth/', UserLoginViewSet.as_view(), name='api-auth'),
    path('register/', UserRegisterViewSet.as_view(), name='api-register'),
]
