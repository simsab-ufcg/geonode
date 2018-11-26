# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-10-15 00:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GeoNodeThemeCustomization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('identifier', models.CharField(editable=False, max_length=255)),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('is_enabled', models.BooleanField(default=False)),
                ('logo', models.ImageField(blank=True, null=True, upload_to=b'img/%Y/%m')),
                ('jumbotron_bg', models.ImageField(blank=True, null=True, upload_to=b'img/%Y/%m')),
                ('jumbotron_welcome_hide', models.BooleanField(default=False)),
                ('jumbotron_welcome_title', models.CharField(blank=True, max_length=255, null=True)),
                ('jumbotron_welcome_content', models.TextField(blank=True, null=True)),
                ('jumbotron_site_description', models.TextField(blank=True, null=True)),
                ('body_color', models.CharField(default=b'#333333', max_length=10)),
                ('navbar_color', models.CharField(default=b'#333333', max_length=10)),
                ('jumbotron_color', models.CharField(default=b'#2c689c', max_length=10)),
                ('copyright_color', models.CharField(default=b'#2c689c', max_length=10)),
                ('contactus', models.BooleanField(default=False)),
                ('copyright', models.TextField(blank=True, null=True)),
                ('contact_name', models.TextField(blank=True, null=True)),
                ('contact_position', models.TextField(blank=True, null=True)),
                ('contact_administrative_area', models.TextField(blank=True, null=True)),
                ('contact_street', models.TextField(blank=True, null=True)),
                ('contact_postal_code', models.TextField(blank=True, null=True)),
                ('contact_city', models.TextField(blank=True, null=True)),
                ('contact_country', models.TextField(blank=True, null=True)),
                ('contact_delivery_point', models.TextField(blank=True, null=True)),
                ('contact_voice', models.TextField(blank=True, null=True)),
                ('contact_facsimile', models.TextField(blank=True, null=True)),
                ('contact_email', models.TextField(blank=True, null=True)),
                ('partners_title', models.CharField(blank=True, default=b'Our Partners', max_length=100, null=True)),
            ],
            options={
                'ordering': ('date',),
                'verbose_name_plural': 'Themes',
            },
        ),
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.ImageField(blank=True, null=True, upload_to=b'img/%Y/%m')),
                ('name', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=255)),
                ('href', models.CharField(max_length=255)),
            ],
            options={
                'ordering': ('name',),
                'verbose_name_plural': 'Partners',
            },
        ),
        migrations.AddField(
            model_name='geonodethemecustomization',
            name='partners',
            field=models.ManyToManyField(blank=True, related_name='partners', to='geonode_themes.Partner'),
        ),
    ]
