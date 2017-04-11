from django.contrib import admin
from pong.models import Player, Match

class PlayerAdmin(admin.ModelAdmin):
   list_display = ('name',)

class MatchAdmin(admin.ModelAdmin):
	list_display = ('player_one', 'player_two')


admin.site.register(Player, PlayerAdmin)
admin.site.register(Match, MatchAdmin)

