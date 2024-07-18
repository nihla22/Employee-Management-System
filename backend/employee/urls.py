from django.urls import path
from .views import employee_view
from .views import login_view
urlpatterns=[
    path('employee/', employee_view),
    path('login/', login_view, name='login'),
    path('employee/<int:pk>/', employee_view),
        ]