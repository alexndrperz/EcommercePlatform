# Generated by Django 4.2.6 on 2023-10-11 01:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MAIN', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]
