# Generated by Django 4.2.6 on 2024-06-02 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.DateField()),
                ('place', models.IntegerField()),
                ('student_id', models.IntegerField()),
                ('time', models.IntegerField()),
            ],
        ),
    ]
