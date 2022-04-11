let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
let computerChoiceSpan = document.querySelector('.computerChoice');
let playerActionSpan = document.querySelector('.playerAction');
let winnerPannel = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;
const gameOptions = ["rock", "paper", "scissor"];


function computerAction() {
  const randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameOptions[randomNum];
    computerChoiceSpan.innerHTML = computerChoice;
}//random comp choice

function playerAction(choice) {
    playerChoice = gameOptions[choice];
    playerActionSpan.innerHTML = playerChoice;
    computerAction();
    game(playerChoice,computerChoice);
}//player choice

function game(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        won("tie");
        return;
    } //tie

    if (playerChoice == "rock" && computerChoice == "paper")
        won("computer");
    else if (playerChoice == "rock" && computerChoice == "scissor")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "rock")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "scissor")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "rock")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "paper")
        won("player");
    else
        alert("Wrong inputs")
} //all scenarios in which there is a winner

function won(winner) {
    if (winner == "player") {
        roundResult.innerHTML = "You won :)";
        playerScore = playerScore + 1;
        pScoreboard.innerHTML = playerScore;
    } //adds point to player scoreboard
    else if (winner == "computer") {
        roundResult.innerHTML = "You lost :(";
        computerScore = computerScore + 1;
        cScoreboard.innerHTML = computerScore;
    }
    else {
        roundResult.innerHTML = "It's a tie :/";
    } //if tie
}

function resetGame() {
    roundResult.innerHTML = "";
    playerScore = 0;
    pScoreboard.innerHTML = playerScore;
    computerScore = 0;
    cScoreboard.innerHTML = computerScore;
    playerActionSpan.innerHTML = "";
    computerChoiceSpan.innerHTML = "";
    winnerPannel.style.display = "none";
}//reset
