from django.contrib import admin
from .models import Categories, Pen, Profile, Forms

admin.site.register(Pen)
admin.site.register(Forms)
admin.site.register(Profile)
admin.site.register(Categories)