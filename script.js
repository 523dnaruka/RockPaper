// Starting Variables
//Storing HTMl elements a variable for easy access
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
//setting score variables for player & computer to track score
let playerScore = 0;
let computerScore = 0;
//intializing Global variables to store user and computer selections
let compChoice;
let playerChoice;

//function to randomly generate a choice for the computer, uses a list to store selections)

function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}
