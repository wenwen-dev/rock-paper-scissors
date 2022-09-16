function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice;
  randomNumber < 0.34 ? computerChoice = 'rock' : 
  randomNumber < 0.68 ? computerChoice = 'paper' :
  computerChoice = 'scissors';
  return computerChoice;
}

function playOneRound(playerChoice, computerSelection){
  let playerSelection = playerChoice.toLowerCase();
  switch(true) {
    case playerSelection === computerSelection:
      return `It\'s a tie! Player: ${playerSelection}, Computer: ${computerSelection}. `;
      break;
    case playerSelection === 'rock' && computerSelection === 'scissors':
    case playerSelection === 'paper' && computerSelection === 'rock':
    case playerSelection === 'scissors' && computerSelection === 'paper':
      return `You win! Player: ${playerSelection}, Computer: ${computerSelection}.  ${playerSelection} beats ${computerSelection}`;
      break;
    default:
      return `You lose! Player: ${playerSelection}, Computer: ${computerSelection}.  ${computerSelection} beats ${playerSelection}`;
  }
}


function game() {
  let playerInput;
  let playerCounter = 0;
  let computerCounter = 0;
  for (let i = 0; i < 5; i++) {
    playerInput = prompt('Type rock, paper or scissors:');
    let result = playOneRound(playerInput, getComputerChoice());
    console.log(result);
    if (result.indexOf('win') !== -1) 
      playerCounter++;
    else if (result.indexOf('lose') !== -1)
      computerCounter++;
    if (i === 4 && playerCounter > computerCounter)
      console.log(`Final result: Player's won ${playerCounter} : ${computerCounter}!`);
    else if (i ===4 && computerCounter > playerCounter)
      console.log(`Final result: Computer's won ${computerCounter} : ${playerCounter}!`);
    else if (i ===4 && playerCounter === computerCounter)
    console.log(`Final result: It's a tie! ${computerCounter} : ${playerCounter}!`);
  }
  
}

// game();


//playOneRound Method 1: using if else
// function playOneRound(playerChoice, computerSelection){
//   let playerSelection = playerChoice.toLowerCase();
//   console.log(playerSelection);
//   console.log(computerSelection);
//   if (playerSelection === computerSelection)
//     return 'It\'s a tie!';
//   else if (playerSelection === 'rock' && computerSelection === 'scissors')
//     return `You win! ${playerSelection} beats ${computerSelection}`;
//   else if (computerSelection === 'rock' && playerSelection === 'scissors')
//     return `You lose! ${computerSelection} beats ${playerSelection}`;
//   else if (playerSelection === 'paper' && computerSelection === 'rock')
//     return `You win! ${playerSelection} beats ${computerSelection}`;
//   else if (computerSelection === 'paper' && playerSelection === 'rock')
//     return `You lose! ${computerSelection} beats ${playerSelection}`;
//   else if (playerSelection === 'scissors' && computerSelection === 'paper')
//     return `You win! ${playerSelection} beats ${computerSelection}`;
//   else 
//     return `You lose! ${computerSelection} beats ${playerSelection}`;
// }