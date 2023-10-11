# Generated by Django 4.2.6 on 2023-10-11 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MAIN', '0002_user_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='balance',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
