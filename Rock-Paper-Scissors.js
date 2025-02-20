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

let rockButton = document.querySelector("#Rock");
let paperButton = document.querySelector("#Paper");
let scissorsButton = document.querySelector("#Scissors");
let results = document.querySelector("#results")
let scoreSection = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;

function playGame() {
  let result = "";
  let humanSelection;
  let computerSelection;

  rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
  });

  paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
  });

  scissorsButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
  });


  function playRound(humanSelection, computerSelection){
    if (humanSelection === "Rock" && computerSelection === "Scissors") {
      result = "win";
      results.textContent = "You win! Rock beats Scissors"
  } else if (humanSelection === "Paper" && computerSelection === "Rock") {
      result = "win";
      results.textContent = "You win! Paper beats Rock"
  } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
    result = "win";
    results.textContent = "You win! Scissors beats Paper"
  } else if (humanSelection === "Rock" && computerSelection === "Paper") {
    result = "lose";
    results.textContent = "You lose! Paper beats Rock"
  } else if (humanSelection === "Paper" && computerSelection === "Scissors") {
    result = "lose";
    results.textContent = "You lose! Scissors beats Paper"    
  } else if (humanSelection === "Scissors" && computerSelection === "Rock") {
    result = "lose";
    results.textContent = "You lose! Rock beats Scissors";
  } else if (humanSelection !== undefined && computerChoice !== undefined){
    result = "tie";
  }

    if (result === "win"){
      playerScore++
      scoreSection.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
      console.log("Current scores: Player:", playerScore, "Computer:", computerScore);
      if (playerScore === 5) {
        results.textContent = "Congrats! You are the winner!";
        computerScore = 0;
        playerScore = 0;
      } 
    } else if (result === "tie"){
      results.textContent = "Its a tie! Play Again"
    } else {
      computerScore++;
      console.log("Current scores: Player:", playerScore, "Computer:", computerScore);
      scoreSection.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
      if (computerScore === 5) {
      results.textContent = "You lose! Better luck next time!";
      computerScore = 0;
      playerScore = 0;
  }
    }
  }

  if (playerScore === 5) {
    results.textContent = "Congrats! You are the winner!";
  } else if (computerScore === 5) {
    results.textContent = "You lose! Better luck next time!";
  }

  scoreSection.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

playGame();