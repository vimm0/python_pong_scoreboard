# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-10 11:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pong', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='deuce_count',
        ),
        migrations.RemoveField(
            model_name='player',
            name='status',
        ),
        migrations.AddField(
            model_name='match',
            name='deuce_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='match',
            name='status',
            field=models.CharField(default='status', max_length=40),
        ),
    ]
