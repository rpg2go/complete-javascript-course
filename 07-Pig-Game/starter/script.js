'use strict';

const MaxScore = 50;

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isGamePlaying = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (isGamePlaying) {
        // 1. generate a randong dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. check for roll 1: if true, switch to next player
        if (dice !== 1) {
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            //switch to the next player
            switchPlayer();
        }
    }
});

// hold dice functionality
btnHold.addEventListener('click', function () {
    console.log('click holdButton ...');
    if (isGamePlaying) {
        scores[activePlayer] += currentScore;
        console.log('hold button hit...', scores[activePlayer]);

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= MaxScore) {
            isGamePlaying = false;

            diceEl.classList.add('hidden');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

// hold dice functionality
btnNew.addEventListener('click', function () {
    console.log('click newButton ...');
    isGamePlaying = true;
    if (diceEl.classList.contains('hidden')) {
        diceEl.classList.remove('hidden');
    }

    activePlayer = 0;

    for (let i = 0; i < 2; i++) {
        scores[i] = 0;
        document.getElementById(`current--${i}`).textContent = 0;
        document.getElementById(`score--${i}`).textContent = 0;

        if (i % 2 == 0) {
            document
                .querySelector(`.player--${i}`)
                .classList.add('player--active');
        } else {
            document
                .querySelector(`.player--${i}`)
                .classList.remove('player--active');
        }

        if (
            document
                .querySelector(`.player--${i}`)
                .classList.contains('player--winner')
        ) {
            document
                .querySelector(`.player--${i}`)
                .classList.remove('player--winner');
        }
    }
});
