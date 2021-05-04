from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('accounts.urls')),
    path('profile/', include('user_profile.urls')),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
