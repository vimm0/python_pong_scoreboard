from django.shortcuts import render, get_object_or_404,render_to_response,redirect
from django.http import HttpResponse, HttpResponseRedirect
from .forms import MatchForm
from .models import Player, Match
import datetime


def create_match(request):
    form = MatchForm(request.POST or None)
    if form.is_valid():
        instance=form.save()
        # print(form._meta.get_fields())
        return HttpResponseRedirect('/match/%s/' % instance.pk)
    # print(PongMatch.id)
    context = {
        "form": form,
    }
    return render(request, 'user_form.html', context)


def score_board(request,pk=None):
    if pk:
        #print(Match.objects.all()[0])                    iterator for django list objects
        # print(Match.objects.get(id=pk).player_one_score)
        match=Match.objects.get(id=pk)
        alpha=Match.objects.get(id=pk).player_one
        tango=Match.objects.get(id=pk).player_two
    else:
        match=Match()
    total = 0
    today = datetime.date.today()
    if request.method == 'POST':
        #Button moves 'left' is button name in template and likewise is 'right' and 'clear'
        if 'left' in request.POST:
            match.player_one_score = match.player_one_score + 1
        if 'right' in request.POST:
            match.player_two_score = match.player_two_score + 1
        if 'clear' in request.POST:
            match.player_one_score = 0
            match.player_two_score = 0
            match.player_one_status = "status"
            match.player_two_status = "status"
        total = match.player_one_score + match.player_two_score
        # Deuce-Advantage__everything is okay except intermediate deuce
        if total >= 4:
            if match.get_deuce_status()==True:
                match.player_one_status="Deuce"
                match.player_two_status="Deuce"
            elif match.get_deuce_status()==False:
                if 'left' in request.POST and match.get_advantage_status()==True:
                    match.player_one_status="Advantage"
                if 'left' in request.POST and match.get_wins_status()==True:
                    wins_alpha(request,alpha,tango,match)
                elif 'right' in request.POST and match.get_advantage_status()==True:
                    match.player_two_status="Advantage"
                if 'right' in request.POST and match.get_wins_status()==True:
                   wins_tango(request,alpha,tango,match)
            else:
                #win-win
                wins(request,match,alpha,tango,total)

        if 'left' in request.POST and match.get_wins()==True:
                    wins_alpha(request,alpha,tango,match)
        if 'right' in request.POST and match.get_wins()==True:
                   wins_tango(request,alpha,tango,match)
        #Service changed
        service_changed(request,alpha,tango,total)
        match.save()
    context = {
        "match":match,
        "today":today,
        "alpha": alpha,
        "tango": tango,
        "total": total
    }
    return render(request, 'index.html', context)

def wins(request,match,alpha,tango,total):
    if match.player_one_score > 2 and match.player_one_score>match.player_two_score and total>2:
        wins_alpha(request,alpha,tango,match)
    if match.player_two_score > 2 and match.player_two_score>match.player_one_score and total>2:
        wins_tango(request,alpha,tango,match)

def wins_alpha(request,alpha,tango,match):
    match.player_one_status="wins"
    match.player_two_status="Lose"

def wins_tango(request,alpha,tango,match):
    match.player_one_status="Lose"
    match.player_two_status="wins"

def service_changed(request,alpha,tango,total):
    if total % 2 == 0:
            alpha.serve = not alpha.serve
            tango.serve = not tango.serve

def player_history(request):
    player = Player.objects.all()
    match = Match.objects.all()
    context = {
        'player': player,
        'match': match,
    }
    return render(request, 'history.html', context)