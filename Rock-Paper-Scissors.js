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

let computerChoice = getComputerChoice();
console.log("computerChoice:", computerChoice);

// Line 10 returns either 1, 2 or 3 //
// Each number corresponds to a different choice //
// A variable is assigned outside of the function to call the function and get the computer's choice //

// Step 3 : Get the players choice 
// Instead of a random number, a player will select one of 3 options as soon as the page loads // 
// This will be done via a prompt //

function getPlayerChoice() {
  prompt("Please choose Rock, Paper, or Scissors");
}

