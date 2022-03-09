from cProfile import label
from logging import PlaceHolder
from unicodedata import category
from django.db import models

# Create your models here.


class Category(models.Model):
    category_name = models.CharField(max_length=256, null=True, blank=True)

    def __str__(self):
        return self.category_name

class Townhall(models.Model):
    townhall_level = models.IntegerField(blank=True)

    def __str__(self):
        return str(self.townhall_level)


class BaseDetail(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    category_name = models.ForeignKey(Category, on_delete=models.CASCADE)
    townhall_level = models.ForeignKey(Townhall, on_delete=models.CASCADE)
    url = models.CharField(max_length=556)

    def __str__(self):
        return self.name