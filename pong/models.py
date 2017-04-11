from django.db import models
from datetime import datetime

class Player(models.Model):
	name=models.CharField(max_length=40)
	# score = models.IntegerField(default = 0) 
	serve=models.BooleanField(default=True)
	

	def __str__(self):
	    return self.name

class Match(models.Model):
	player_one = models.ForeignKey(Player, on_delete=models.CASCADE,related_name='player_one')
	player_two = models.ForeignKey(Player, on_delete=models.CASCADE,related_name='player_two')
	player_one_score=models.IntegerField(default = 0)
	player_two_score=models.IntegerField(default = 0)
	player_one_status =models.CharField(max_length=40,default='status')
	player_two_status =models.CharField(max_length=40,default='status')
	player_one_deuce_count = models.IntegerField(default=0)
	player_two_deuce_count = models.IntegerField(default=0)
	log_time=models.DateTimeField(auto_now_add=True, blank=True)

	def get_deuce_status(self):
		if self.player_one_score==self.player_two_score and self.player_one_score >= 2:
			return True#Deuce
		else:
			return False#other

	def get_advantage_status(self):
		if self.player_one_score==self.player_two_score+1 or self.player_one_score+1 == self.player_two_score and self.player_one_score>=2:
			return True#Advantage
		else:
			return False#other

	def get_wins_status(self):
		if self.player_one_score==self.player_two_score+2 or self.player_one_score+2 == self.player_two_score and self.player_one_score>=2:
			return True#wins
		else:
			return False

	def get_wins(self):
		if self.player_one_score==3 and self.player_two_score==0 or self.player_two_score==3 and self.player_one_score==0:
			return True #wins
		else:
			return False