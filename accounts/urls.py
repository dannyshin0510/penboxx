from django.urls import path
from . import views

urlpatterns = [
    path('pen-list/', views.penList, name='pen-list'),
    path('pen-detail/<str:pk>/', views.penDetail, name='pen-detail'),
    path('pen-category/<str:category>/', views.getPensbyCategory, name='get-pens-by-category'),
    path('pen-create/', views.penCreate, name='pen-create'),
    path('pen-update/<str:pk>/', views.penUpdate, name='pen-update'),
    path('pen-delete/<str:pk>/', views.penDelete, name='pen-delete'),
    path('pen-monthly/', views.penMonthly, name='pen-monthly'),
    path('validate/', views.validateSubmission, name='validate-submission'),
    path('record/', views.recordDate, name='record'),
    path('pen-categories/<str:pk>/', views.penCategories, name='pen-categories'),

]