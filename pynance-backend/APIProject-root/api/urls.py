from django.urls import path, include
from .views import IncomeViewSet, ExpenseViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

# article_list, article_details,
# ArticleList, ArticleDetails,

router = DefaultRouter()
router.register('income', IncomeViewSet, basename='income')
router.register('expense', ExpenseViewSet, basename='expense')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # path('articles/', ArticleList.as_view()),
    # path('articles/<int:id>', ArticleDetails.as_view()),
]
    # path('articles', article_list),
    # path('articles/<int:pk>', article_details),