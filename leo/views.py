from django.shortcuts import render

# Create your views here.
def home(request):
    # NewProfileForm=form
    return render(request, 'index.html', locals())
