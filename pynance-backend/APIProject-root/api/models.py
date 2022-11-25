from django.db import models


# Create your models here.
class Income(models.Model):
    Date = models.IntegerField()
    History = models.CharField(max_length=100)
    Money = models.IntegerField()
    Sort = models.CharField(max_length=50)
    Memo = models.TextField(max_length=400)

    # def __str__(self):
    #     return self.title

class Expense(models.Model):
    Date = models.IntegerField()
    History = models.CharField(max_length=100)
    Money = models.IntegerField()
    Sort = models.CharField(max_length=50)
    Memo = models.TextField(max_length=400)

    # def __str__(self):
    #     return self.title


