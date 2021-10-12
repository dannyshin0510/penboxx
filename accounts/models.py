from django.db import models
from django.contrib.auth.models import User

class Categories (models.Model):
    useCase = models.CharField(max_length=100)

    def __str__(self):
        return self.useCase

class Pen (models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    categories = models.ManyToManyField(Categories)
    name = models.CharField(max_length=100)
    pen_code = models.CharField(max_length=100)
    pen_make = models.CharField(max_length=50, null=True)
    details = models.CharField(max_length=350, null=True, blank=True)
    picture = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name

class Forms (models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    manufacturer = models.CharField(max_length=100, null=True, blank=True)
    model = models.CharField(max_length=100, null=True, blank=True)
    reason = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.manufacturer


class Profile (models.Model):
    user = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True, blank=True)
    lastSumbitted = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name