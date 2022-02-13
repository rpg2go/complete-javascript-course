'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number 👌👌';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 35;
// document.querySelector('.score').textContent = 25;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

// let score = Number(document.querySelector('.score').textContent);
let highScore = 0;
let initialScore = 20;
let score = initialScore;
document.querySelector('.score').textContent = score;

let secret = Math.trunc(Math.random(0, 1) * 20);
while (secret == 0) {
    secret = Math.trunc(Math.random(0, 1) * 20);
}
//document.querySelector('.number').textContent = secret;

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = initialScore;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    secret = Math.trunc(Math.random(0, 1) * 20);
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '🤥 No number';
        //when player wins
    } else if (guess === secret) {
        document.querySelector('.number').textContent = secret;
        displayMessage('Correct number 👌👌');
        score++;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
        }

        document.querySelector('.highscore').textContent = highScore;
        // when guess is too high
    } else {
        guess > secret
            ? displayMessage('Too high 😒')
            : displayMessage('Too low 😗');
        score--;
    }

    document.querySelector('.score').textContent = score;
    if (score <= 0) {
        displayMessage('You lose the game 🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️');
    }
});

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}
