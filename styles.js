const choices = ["rock","paper","scissors"];
const playertext = document.getElementById("playertext");
const computertext = document.getElementById("computertext");
const resulttext = document.getElementById("resulttext");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
 

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice){
        result = "Draw";
    } else if (playerChoice === "rock" && computerChoice === "scissors"){
        result = "Player Wins";
        playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        result = "Player Wins";
        playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper"){
        result = "Player Wins";
        playerScore++;
    } else if (playerChoice === "rock" && computerChoice === "paper"){
        result = "Computer Wins";
        computerScore++;
    } else if (playerChoice === "paper" && computerChoice === "scissors"){
        result = "Computer Wins";
        computerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        result = "Computer Wins";
        computerScore++;
    }
    
    playertext.textContent = `Player: ${playerChoice}`;
    computertext.textContent = `Computer: ${computerChoice}`;
    scoretext.textContent = `Score: Player: ${playerScore} - Computer: ${computerScore}`;

    resulttext.textContent = result;
}




