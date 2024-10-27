// 4
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    document.getElementById("playerDisplay").textContent = `PLAYER: ${playerChoice}`;
    document.getElementById("computerDisplay").textContent = `COMPUTER: ${computerChoice}`;
    document.getElementById("resultDisplay").textContent = result;

    const resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            document.getElementById("playerScoreDisplay").textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            document.getElementById("computerScoreDisplay").textContent = computerScore;
            break;
    }
}
