'use strict'

const score0El = document.querySelector('#score-0');
const score1El = document.querySelector('#score-1');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const diceEl = document.querySelector('.dice');
const currentScore0El = document.querySelector('#current-0');
const currentScore1El = document.querySelector('#current-1');
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');


//Initial conditions
let scores, activePlayer, currentScore, playing;


const init = () => {
    playing = true;
    diceEl.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.remove('player-winner');
    player1El.classList.remove('player-winner');
    player1El.classList.remove('player-active');
    player0El.classList.add('player-active');
}

init();

//Switching the player.

const switchPlayer = () => {
    currentScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
}

//Rolling the dice

btnRoll.addEventListener('click', function () {

    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
        }

        else {
            switchPlayer();
        }
    }

});

//To hold scores

btnHold.addEventListener('click', function () {

    if (playing) {

        scores[activePlayer] += currentScore;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
            document.querySelector(`.player-${activePlayer}`).classList.remove('palyer-active');
            diceEl.classList.add('hidden');
        }

        else {
            switchPlayer();
        }
    }

});

//To reset the game.

btnNew.addEventListener('click', init);