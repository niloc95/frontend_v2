from django.urls import path, include
from . import views
from .views import contact, thank_you_page


urlpatterns = [
    path('', views.home, name='home'),
    path('tailwind/', views.tailwind, name='tailwind'),
    path('contact', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('thank-you/', thank_you_page, name='thank_you_page'),
    path("__reload__/", include("django_browser_reload.urls")),
    

]