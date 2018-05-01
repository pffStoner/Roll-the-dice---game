/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundSroce, activePlayer, gamePlaying, prevRoll;

init();

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
		//random number
	var dice = Math.floor(Math.random() * 6 ) + 1;
	var dice2 = Math.floor(Math.random() * 6 ) + 1;


	//display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

		//display the result
	var diceDOM = document.querySelector('.dice-2');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice2 + '.png'; 

	//update round score if the rolled number was NOT 1
	if((dice === 6 || dice2 === 6 ) && prevRoll === 6){
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		nextPlayer();
	}else if(dice === 6 && dice2 === 6){
		//alert('fak2');
	}else if (dice !== 1) {
		roundSroce += (dice+dice2);
		document.querySelector('#current-' + activePlayer).textContent = roundSroce;
	}else{
		//next player
		 nextPlayer();
		}
		if (dice === 6 || dice2 === 6) {
			prevRoll = 6;
			console.log(prevRoll);
		}else{
			prevRoll = 0;
			console.log(prevRoll);

		}
	}

	
});//end button roll


document.querySelector('.btn-hold').addEventListener('click', function(){
	if (gamePlaying) {
		//add current score to global score
	scores[activePlayer] += roundSroce;

	//update UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	//check if player won the game
	if (scores[activePlayer] >= 100) {
		document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;

	}else{
		//next player
	 	nextPlayer();
	}
	}

	
});//end button hold

document.querySelector('.btn-new').addEventListener('click', init);
 

function init() {
	gamePlaying = true;
	scores = [0,0];
	activePlayer = 0;
	roundSroce = 0;

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice-2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}//end init

function nextPlayer(){
		//ternary operator(condition ? expr1 : expr2)
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundSroce = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-0').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice-2').style.display = 'none';

}//end init