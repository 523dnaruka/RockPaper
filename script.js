let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
let computerChoiceSpan = document.querySelector('.computerChoice');
let userChoiceSpan = document.querySelector('.userChoice');
let winnerPannel = document.querySelector('.winner');


let playerScore = 0;
let computerScore = 0;

let computerChoice;
let playerChoice;
const gameOptions = ["rock", "paper", "scissor"];


function computerChose() {
  const randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameOptions[randomNum];
    computerChoiceSpan.innerHTML = computerChoice;
} //randomely choses computer choice

function userChoice(choice) {
    playerChoice = gameOptions[choice];
    userChoiceSpan.innerHTML = playerChoice;
    computerChose();
    game(playerChoice,computerChoice);
} //player's selected choice



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
} //result if there is a winner
function game(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        won("tie");
        return;  // when its a tie
    }
function won(winner) {
    if (winner == "player") {
        roundResult.innerHTML = "You win :)";
        playerScore = playerScore + 1;
        pScoreboard.innerHTML = playerScore;
    } //adds point to player if they win
    else if (winner == "computer") {
        roundResult.innerHTML = "You lose :(";
        computerScore = computerScore + 1;
        cScoreboard.innerHTML = computerScore;
    } //adds point to computer if it wins
    else {
        roundResult.innerHTML = "It's a tie :/";
    }
} //display when there is a tie

function resetGame() {
    roundResult.innerHTML = "";
    playerScore = 0;
    pScoreboard.innerHTML = playerScore;
    computerScore = 0;
    cScoreboard.innerHTML = computerScore;
    userChoiceSpan.innerHTML = "";
    computerChoiceSpan.innerHTML = "";
}//reset
