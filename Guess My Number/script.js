'use strict';
const number = document.querySelector('.number');
const input = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');

let gameOver = false;

let randomNumber = Math.floor(Math.random() * 20 + 1);
number.innerText = randomNumber;

checkBtn.addEventListener('click', () => {
  if (!gameOver && input.value) {
    let currentScore = score.innerText;

    if (randomNumber == input.value) {
      highscore.innerText = currentScore;
      document.body.style.backgroundColor = ' #60b347';
      gameOver = true;
      message.innerText = '🎉 Correct Number!';
      number.innerText = randomNumber;
      number.style.width = '30rem';
    } else {
      score.innerText = currentScore - 1;

      //   if (Number(input.value) < Number(number.innerText))
      //     message.innerText = '📉 Too low!';
      //   else message.innerText = '📈 Too high!';

      message.innerText =
        Number(input.value) > Number(number.innerText)
          ? '📈 Too high!'
          : '📉 Too low!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score.innerText = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  score.textContent = score;
  number.textContent = '?';
  input.value = '';

  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
