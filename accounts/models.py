from django.db import models

# Create your models here.
class Pen (models.Model):
    name = models.CharField(max_length=100)
    pen_code = models.CharField(max_length=100)
    pen_make = models.CharField(max_length=50, null=True)
    details = models.CharField(max_length=350, null=True, blank=True)
    picture = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name
