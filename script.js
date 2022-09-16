
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.btn');

let playerPoint = 0;
let computerPoint = 0;
let playerSelection;
let computerSelection;

const playerScoreboard = document.querySelector('#one');
const computerScoreboard = document.querySelector('#two');

buttons.forEach(button => button.addEventListener('click', (e) => {
  playerSelection = e.target.id;
  let result = playRound();

  if (result === 1)
    playerScoreboard.textContent = Number(playerScoreboard.textContent) + 1;
  else if (result === 0)
    computerScoreboard.textContent = Number(computerScoreboard.textContent) + 1;

  if (Number(playerScoreboard.textContent) === 5)  {
    document.querySelector('h2').textContent = 'You won!';
  }
  if (Number(computerScoreboard.textContent) === 5) {
    document.querySelector('h2').textContent = 'Computer won!';
  }
}
  ));

function playRound(){
  computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playerSelection);

  switch(true) {
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