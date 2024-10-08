# Generated by Django 4.2.6 on 2024-08-09 01:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MAIN', '0004_user_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=50)),
                ('correo', models.CharField(max_length=50)),
                ('createdAt', models.CharField(max_length=50)),
                ('image', models.ImageField(default='images/nf.jpg', upload_to='images/')),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='image',
        ),
    ]
