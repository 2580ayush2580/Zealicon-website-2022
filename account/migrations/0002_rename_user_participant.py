# Generated by Django 4.0.3 on 2022-04-11 18:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_alter_event_contact_alter_society_contact'),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='Participant',
        ),
    ]
