const buttons = document.querySelectorAll('.btn-container');
const updateMessage = document.querySelector('#updateMessage');

let playerSelection;
let computerSelection;
let gameIsOver = false;

const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');

buttons.forEach(button => button.addEventListener('click', game));

function game(e) {
  if (gameIsOver) return;
  playerSelection = e.target.id;
  let result = playRound();

  if (result === 2) {
    updateMessage.textContent = `It's a tie!`
  }

  if (result === 1) {
    playerScoreboard.textContent = Number(playerScoreboard.textContent) + 1;
    updateMessage.textContent = `You won this round, good job!`
  }
  else if (result === 0) {
    computerScoreboard.textContent = Number(computerScoreboard.textContent) + 1;
    updateMessage.textContent =  `Uh oh, the computer has won this round!`
  }

  if (Number(playerScoreboard.textContent) === 5)  {
    document.querySelector('h2').textContent = 'You won!';
    gameIsOver = true;
    updateMessage.textContent = `Hurray! You won!`
  }
  if (Number(computerScoreboard.textContent) === 5) {
    document.querySelector('h2').textContent = 'Computer won!';
    gameIsOver = true;
    updateMessage.textContent = `Dude, you lost to a machine...`
  }
}

function playRound(){
  computerSelection = getComputerChoice();
  console.log('computer: ', computerSelection);
  console.log('player: ', playerSelection);

  switch(true) {
    case playerSelection === computerSelection:
      return 2;
    case playerSelection === 'rock' && computerSelection === 'scissors':
    case playerSelection === 'paper' && computerSelection === 'rock':
    case playerSelection === 'scissors' && computerSelection === 'paper':
      return 1;
    case computerSelection === 'rock' && playerSelection === 'scissors':
    case computerSelection === 'paper' && playerSelection === 'rock':
    case computerSelection === 'scissors' && playerSelection === 'paper':
      return 0;
  }
}

function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice;
  randomNumber < 0.34 ? computerChoice = 'rock' : 
  randomNumber < 0.68 ? computerChoice = 'paper' :
  computerChoice = 'scissors';
  return computerChoice;
}