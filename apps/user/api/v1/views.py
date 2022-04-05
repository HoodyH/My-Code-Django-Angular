from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated


from user.models import User
from .serializers import UserSerializer


class UserViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
