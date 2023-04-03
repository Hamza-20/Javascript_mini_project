'use strict';

//made the code dry using thses functions
function displayMessage(valueM) {
  document.querySelector('.message').textContent = valueM;
}

function setTextContent(content, className) {
  document.querySelector(className).textContent = content;
}

let secretNumber = Math.trunc(Math.random() * 10 + 1);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    setTextContent('No number!', '.message');
  }

  //when the answer is right
  else if (guess === secretNumber) {
    setTextContent('Correct number!', '.message');

    setTextContent(secretNumber, '.number');
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = 'green';

    //another way of setting green colour is : document.querySelector('body').style.backgroundColor = 'green';

    if (score > highscore) {
      setTextContent(score, '.highscore');
      highscore = score;
    } else if (highscore > score) {
      setTextContent(highscore, '.highscore');
    }
  }

  //when guess is low (refactored the below code)
  else if (guess !== secretNumber) {
    if (score > 0) {
      setTextContent(
        guess > secretNumber ? 'Too high!' : 'Too Low!',
        '.message'
      );
      score--;
      setTextContent(score, '.score');
    } else {
      displayMessage('You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  score = 20;

  setTextContent('Start guessing...', '.message');

  setTextContent('0', '.score');
  document.body.style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';

  setTextContent('?', '.number');

  document.querySelector('.guess').value = '';
});
