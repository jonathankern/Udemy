/*
Challenge 2:

Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JS.)

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

    if (gamePlaying) {
        // 1. need random number
        // number between 1-6 integer use floor method with random * 6 for amount of options and plus 1 so 0 is not included
        var dice = Math.floor(Math.random() * 6) + 1;
        // console.log(dice);

        // 2. display result
        // show dice
        // dom object for dice
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        // set correct number w/img
        // change src attr w/ current dice
        // dice-1.png, dice-2.png, dice-3.png...
        diceDOM.src = 'dice-' + dice + '.png';

        console.log('dice: ' + dice);
        console.log('lastDice: ' + lastDice);

        if (dice === 6 && lastDice === 6) {
            // clear score and round score
            scores[activePlayer] = 0;

            // update DOM to show 0
            document.querySelector('#score-' + activePlayer).textContent = '0';

            nextPlayer();
        } else if (dice !== 1) {
            // add score to update roundScore
            roundScore += dice; // same as writing roundScore + dice
            // make dynamic current- so it could be either 0 or 1
            // setter, setting value
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }

        // set variable for previous roll so next time we have access to variable
        lastDice = dice;
    }
});

// set up event listener for hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
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
            document.querySelector('.dice').style.display = 'none';

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
    document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.error-message').classList.add('show');

    gamePlaying = false;
}

function hideErrors() {
    document.getElementById('winning-score').classList.remove('error');
    document.querySelector('.error-message').classList.add('hide');
    document.querySelector('.error-message').classList.remove('show');

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
    document.querySelector('.dice').style.display = 'none';

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
}
