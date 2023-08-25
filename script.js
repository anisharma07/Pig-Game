'use strict';
const holdScore = document.querySelector('.btn--hold');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player = document.querySelector('.player');
const img = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
img.style.display = 'none';

let randomDice = Math.trunc(Math.random() * 6 + 1);
let score = 0;
let totalScore = [];
let sum = 0;
let sum1 = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (sum < 100 && sum1 < 100) {
    randomDice = Math.trunc(Math.random() * 6 + 1);
    img.style.display = 'block';
    img.src = `./dice-${randomDice}.png`;
    score = score + randomDice;

    if (player1.classList.contains('player--active')) {
      if (randomDice !== 1) {
        currentScore1.textContent = score;
        totalScore.push(randomDice);
      } else {
        totalScore = [];
        score = 0;
        player2.classList.add('player--active');
        player1.classList.remove('player--active');

        currentScore1.textContent = score;
      }
    } else if (player2.classList.contains('player--active')) {
      if (randomDice !== 1) {
        currentScore2.textContent = score;
        totalScore.push(randomDice);
      } else {
        totalScore = [];
        score = 0;
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
        currentScore2.textContent = score;
      }
    }
  }
});

holdScore.addEventListener('click', function () {
  if (sum < 100 && sum1 < 100) {
    if (player1.classList.contains('player--active')) {
      if (score !== 0) {
        for (let i = 0; i < totalScore.length; i++) {
          sum = sum + totalScore[i];
        }
        totalScore = [];
        score = 0;
        document.querySelector('#score--0').textContent = sum;
        currentScore1.textContent = score;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
      }
    } else if (player2.classList.contains('player--active')) {
      if (score !== 0) {
        for (let i = 0; i < totalScore.length; i++) {
          sum1 = sum1 + totalScore[i];
        }
        totalScore = [];
        score = 0;
        document.querySelector('#score--1').textContent = sum1;
        currentScore2.textContent = score;
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
      }
    }
    if (sum >= 100) {
      if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
      }
      player1.classList.add('player--winner');
    } else if (sum1 >= 100) {
      if (player2.classList.contains('player--active')) {
        player2.classList.remove('player--active');
      }
      player2.classList.add('player--winner');
    }
  }
});

//on click new game
newGame.addEventListener('click', function () {
  location.reload();
});
