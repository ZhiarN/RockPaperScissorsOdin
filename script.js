function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let computerChoice;
  if (random === 0) {
    computerChoice = "rock";
  } else if (random === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  return computerChoice;
  
}

function getUserChoice(userChoice) {
  let userInput = prompt("Your Turn:");
  userChoice = userInput.toLowerCase();
  return userChoice;
}
  let userScore = 0;
let computerScore = 0;
let round = 0;

function winner(userScore, computerScore) {
    return userScore > computerScore ? "You Win!" : "You Lose!"
}

function gameReset(){
    round = 0;
    userScore = 0;
    computerScore = 0;
}

function playGame() {
  
round++;

if (round <= 5) {
    
  function playRound(userChoice, computerChoice) {
    computerChoice = getComputerChoice();
    userChoice = getUserChoice();
    if (userChoice === computerChoice) {
      console.log("Tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissor" && computerChoice === "paper")
    ) {
      userScore++;
    } else {
      computerScore++;
    }

    console.log(userChoice + " " + computerChoice);
    console.log(`Your Score: ${userScore}`);
    console.log(`CPU Score: ${computerScore}`);
  }}
  else {
    gameReset();
    return winner(userScore, computerScore);
    
    
  }
  
  console.log("Round is: " + round)
  return playRound();
}
