# Generated by Django 4.2.6 on 2024-08-09 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MAIN', '0003_user_is_active_alter_user_balance'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='image',
            field=models.ImageField(default='images/nf.jpg', upload_to='images/'),
        ),
    ]