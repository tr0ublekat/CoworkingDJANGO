# Generated by Django 4.2.6 on 2024-06-12 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0002_customuser_alter_book_student_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='student_id',
            field=models.IntegerField(),
        ),
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]