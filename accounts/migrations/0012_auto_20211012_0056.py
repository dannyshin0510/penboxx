# Generated by Django 2.2.13 on 2021-10-12 04:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0011_auto_20210218_0432'),
    ]

    operations = [
        migrations.RenameField(
            model_name='forms',
            old_name='details',
            new_name='reason',
        ),
        migrations.AddField(
            model_name='forms',
            name='model',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]