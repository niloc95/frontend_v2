from django.urls import path, include
from . import views
from .views import contact, thank_you_page, subscribe
from .views import RobotsTxtView
from django.conf.urls import handler404
from .views import not_found_404_view


urlpatterns = [
    path('', views.home, name='home'),
    path('tailwind/', views.tailwind, name='tailwind'),
    path('nof/', views.nof, name='nof'), #Test page for 404 view
    path('terms/', views.terms, name='terms'),
    path('contact', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('thank-you/', thank_you_page, name='thank_you_page'),
    path("__reload__/", include("django_browser_reload.urls")),
    path('subs/', views.subscribe, name="subscribe"),
    path('robots.txt', RobotsTxtView.as_view(), name='robots_txt'),
    

]

handler404 = not_found_404_view