/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,
    roundScore,
    activePlayer,
    gamePlaying;

// initialize
init();




// selects first element of selector
// put value of dice in the "current" box
// change text using textContent method and should be equal to dice, use text only


// use innerHTML to add html - must use string
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// read value and store value in var
// getter, getting value
// var x = document.querySelector('#score-0').textContent;
// console.log(x);



// button function called from click event listener
// function btn() {
//     // do something
// }
// btn();

// set up event handler
// 2 arguments - type of event, function that will be called as soon as the event happens
// btn is a "callback function" - function that is passed as an argument in another function, (not called by us but called from another function)
// don't need parenthesis bc we don't want to call it, we want event listener to call it for us
// document.querySelector('.btn-roll').addEventLister('click', btn);


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

        // 3. update the round score IF the rolled number was not a "1"
        if (dice !== 1) {
            // add score to update roundScore
            roundScore += dice; // same as writing roundScore + dice
            // make dynamic current- so it could be either 0 or 1
            // setter, setting value
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
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
        if (scores[activePlayer] >= 100) {
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
}
