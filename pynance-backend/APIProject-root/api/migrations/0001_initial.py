# Generated by Django 3.2.5 on 2021-08-22 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Date', models.IntegerField()),
                ('History', models.CharField(max_length=100)),
                ('Money', models.IntegerField()),
                ('Sort', models.CharField(max_length=50)),
                ('Memo', models.TextField(max_length=400)),
            ],
        ),
        migrations.CreateModel(
            name='Income',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Date', models.IntegerField()),
                ('History', models.CharField(max_length=100)),
                ('Money', models.IntegerField()),
                ('Sort', models.CharField(max_length=50)),
                ('Memo', models.TextField(max_length=400)),
            ],
        ),
    ]
