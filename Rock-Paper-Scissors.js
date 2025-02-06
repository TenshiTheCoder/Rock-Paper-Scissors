// Step 1: Setting up the structure
// Set up a boilerplate html
// Set up JS src tag in the html
// Test JS to make sure its linked properly

// Step 2: Get the computer's choice
// Create a function that returns one of 3 random strings : "Rock", "Paper", "Scissors" //

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1; 
  if (computerChoice === 1) {
    return "Rock"
  } else if (computerChoice === 2) {
    return "Paper"
  } else if (computerChoice === 3) {
    return "Scissors"
  }
}

let computerChoice = getComputerChoice().toLowerCase();
console.log("computerChoice:", computerChoice);

// Line 10 returns either 1, 2 or 3 //
// Each number corresponds to a different choice //
// A variable is assigned outside of the function to call the function and get the computer's choice //

// Step 3 : Get the players choice //
// Instead of a random number, a player will select one of 3 options as soon as the page loads // 
// This will be done via a prompt //

function getPlayerChoice() {
  let playerChoice = prompt("Please choose Rock, Paper, or Scissors").toLowerCase();

  if (playerChoice === "") {
    alert("Please enter either Rock, Paper or Scissors")
    prompt("Choose Rock, Paper, Scissors")
  }

  return playerChoice;
}

let playerChoice = getPlayerChoice();
console.log("playerChoice:", playerChoice);

// Players are immediately prompted to enter Rock, Paper, Scissors upon landing on the page //

//Step 4: Setting up Score Variables //
// Scores will start at 0 for both player and computer//

/*
let playerScore = 0;
let computerScore = 0;
*/

// Step 5: Create a function that plays a single round //
// Choices for the player will be case-insensitive //
// Depending on if the player wins or loses, a different message will print in the console //
// Score will then be incremented for the side that won
// Rounds will be determined by comparing the computerChoice and PlayerChoice //

  /* function playRound(humanChoice, computerChoice){
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
      playerScore++
      return console.log("You win! Rock beats Scissors.");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
      playerScore++
      return console.log("You win! Paper beats Rock.")
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
      playerScore++
      return console.log("You win! Scissors beats Paper.")
    } else if (computerChoice == "Rock" && playerChoice == "Scissors") {
      computerScore++
      return console.log("You lose! Rock beats Scissors.")
    } else if (computerChoice == "Paper" && playerChoice == "Rock") {
      computerScore++
      return console.log("You lose! Paper beats Rock.")
    } else if (computerChoice == "Scissors" && playerChoice == "Paper") {
      computerScore++
      return console.log("You lose! Scissors beats Paper.")
    } else if (computerChoice == playerChoice) {
      return console.log("It's a tie! You both chose the same thing.");
    }
  }
  */

/* const humanSelection = playerChoice;
const computerSelection = computerChoice;

playRound(humanSelection, computerSelection);
*/

// Step 6: Create the full game //
// The game will consist of 5 rounds which will be done by calling the playRound() function 5 times //
// At the end of the 5 rounds, the player with the highest score will be the winner //
// If the score is tied at the end of the game, then the function will be called one last time to determine the winner //
// Some functions might be reworked to be more useful // 

let roundNumber = 1;

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  const humanSelection = playerChoice;
  const computerSelection = computerChoice;
  playRound(humanSelection, computerSelection);

  while (roundNumber < 5) {
    console.log("New Round!")
    roundNumber++
    console.log(roundNumber);
    computerChoice = getComputerChoice().toLowerCase();
    console.log("Computer Chose:", computerChoice);
    getPlayerChoice();
    console.log("playerChoice:", playerChoice)
    playRound();
  }

  function playRound(humanSelection, computerSelection){
    if (humanSelection == "Rock" && computerSelection == "Scissors") {
      playerScore++
      console.log("Player Score:", playerScore, "Computer Score:", computerScore)
      return console.log("You win! Rock beats Scissors.");
    } else if (humanSelection == "Paper" && computerSelection == "Rock") {
      playerScore++
      console.log("Player Score:", playerScore, "Computer Score:", computerScore)
      return console.log("You win! Paper beats Rock.")
    } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
      playerScore++
      console.log("Player Score:", playerScore, "Computer Score:", computerScore)
      return console.log("You win! Scissors beats Paper.")
    } else if (computerSelection == "Rock" && humanSelection == "Scissors") {
      computerScore++
      console.log("Player Score:", playerScore, "Computer Score:", computerScore)
      return console.log("You lose! Rock beats Scissors.")
    } else if (computerSelection == "Paper" && humanSelection == "Rock") {
      computerScore++
      console.log("Player Score:", playerScore, "Computer Score:", computerScore)
      return console.log("You lose! Paper beats Rock.")
    } else if (computerSelection == "Scissors" && humanSelection == "Paper") {
      computerScore++
      console.log("Player Score:", playerScore, "Computer Score:", computerScore)
      return console.log("You lose! Scissors beats Paper.")
    } else if (computerSelection == humanSelection) {
      console.log("Player Score:", playerScore, "Computer Score:", computerScore)
      return console.log("It's a tie! You both chose the same thing.");
    } 
  }

  if(playerScore === 3){
    console.log("Player Score:", playerScore, "Computer Score:", computerScore)
    return console.log("You win")
  } else if (computerScore === 3){
    console.log("Player Score:", playerScore, "Computer Score:", computerScore)
    return console.log("You lose")
  } else if (playerScore === computerScore && roundNumber === 5){
    console.log("Player Score:", playerScore, "Computer Score:", computerScore)
    console.log("Time for a tiebreaker round! Winner takes all")
    playRound();
  } else if (playerScore === computerScore){
    console.log("Player Score:", playerScore, "Computer Score:", computerScore)
    return console.log("Game Over! It's a tie.")
  }
}

playGame();