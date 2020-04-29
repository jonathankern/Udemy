/*
Challenge 3:

Add another dice to the game. The player looses his current score when one of them is a 1.

*/

var scores,
    roundScore,
    activePlayer,
    gamePlaying,
    lastDice,
    winningScore,
    winningScoreValue,
    updatedWinningScoreValue;

// initialize
init();



// anonymous function, doesn't have name, cannot be reused outside of this context
document.querySelector('.btn-roll').addEventListener('click', function() {
    console.log('roll dice button clicked');

    if (gamePlaying) {
        var dice1 = document.querySelector('.dice--one');
        var dice2 = document.querySelector('.dice--two');
        var dice3 = document.querySelector('.dice--three');
        var diceList = [dice1, dice2, dice3];

        dice1.style.display = 'block';
        dice2.style.display = 'block';
        // show message
        document.querySelector('.next-player-message').classList.add('hide');

        var newDiceArray = [];

        for (i = 0; i < diceList.length; i++) {
            var dice = Math.floor(Math.random() * 6) + 1;
            diceList[i].style.display = 'block';
            diceList[i].src = 'dice-' + dice + '.png';

            // add dice to update roundScore
            roundScore += dice;
            // update current total in UI
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            // add current dice to new dice array
            newDiceArray.push(dice);
        }

        // compare items in new dice array
        // if one of the dice is a '1', player loses his current score and goes to next player

        if (newDiceArray.includes(1)) {
            console.log('yes it does ' + newDiceArray);
            // clear score and round score
            scores[activePlayer] = 0;

            // update DOM to show 0
            document.querySelector('#score-' + activePlayer).textContent = '0';

            // hide message
            document.querySelector('.next-player-message').classList.remove('hide');

            nextPlayer();
        }
    }
});

// set up event listener for hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    console.log('hold button clicked');
    if (gamePlaying) {
        // when user clicks hold button
        // add current score to global score
        scores[activePlayer] += roundScore; // same as scores[activePlayer] = scores[activePlayer] + roundScore;

        // update UI
        // select score for active player and update text content
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // check if player won the game
        if (scores[activePlayer] >= winningScoreValue) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            // remove active class and add winner class
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            // hide dice
            document.querySelector('.dice--one').style.display = 'none';
            document.querySelector('.dice--two').style.display = 'none';
            document.querySelector('.dice--three').style.display = 'none';

            // show message
            document.querySelector('.next-player-message').classList.add('hide');

            // end game
            gamePlaying = false;
        } else {
            // go to next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // ternary operator, if player is 0 set to 1, else set to 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // set round score back to 0
    roundScore = 0;

    // set back to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // toggle active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide dice before new user
    document.querySelector('.dice--one').style.display = 'none';
    document.querySelector('.dice--two').style.display = 'none';
    document.querySelector('.dice--three').style.display = 'none';

    // show message
    // document.querySelector('.next-player-message').classList.remove('hide');
}

// new game button
// pass init function so when new btn clicked, load init
document.querySelector('.btn-new').addEventListener('click', init);

// winning score button update
document.querySelector('.btn-update').addEventListener('click', function() {
    // if there is a score entered
    if (winningScore.value) {
        winningScoreValue = winningScore.value;
        hideErrors();
    } else {
        showErrors();
    }
});

function showErrors() {
    document.getElementById('winning-score').classList.add('error');
    document.querySelector('.error-message').classList.remove('hide');

    gamePlaying = false;
}

function hideErrors() {
    document.getElementById('winning-score').classList.remove('error');
    document.querySelector('.error-message').classList.add('hide');

    gamePlaying = true;
}

// start game and reset
function init() {
    // state variable = the condition of a system...when we need to know the state of something
    gamePlaying = true;

    // begin with both scores set to 0
    scores = [0, 0];

    // one round score at a time
    roundScore = 0;

    // keep track of active player, first player will be used as 0 and second with be used as 1 (0 based array)
    activePlayer = 0;

    // set default winning score to 100
    winningScore = document.getElementById('winning-score');
    winningScoreValue = winningScore.value = '100';

    // hide dice on load
    document.querySelector('.dice--one').style.display = 'none';
    document.querySelector('.dice--two').style.display = 'none';
    document.querySelector('.dice--three').style.display = 'none';

    // set all scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // reset titles to player 1/player 2
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // remove winner class from both players
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // remove active class from both players
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // set player 1 to active state
    document.querySelector('.player-0-panel').classList.add('active');

    // remove errors
    hideErrors();

    // hide message
    document.querySelector('.next-player-message').classList.add('hide');
}
