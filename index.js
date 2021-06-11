const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
let playerC;


function playerPlay(playerC) {
  btnRock.addEventListener("click", () => {
    playerChoice.src = "img/rock.jpg";
    playerC = "rock";
  });
  btnPaper.addEventListener("click", () => {
    playerChoice.src = "img/paper.jpg";
    playerC = "paper";
  });
  btnScissors.addEventListener("click", () => {
    playerChoice.src = "img/scissors.jpg";
    playerC = "scissors";
  });
  if (playerC === "rock") {
    return "rock";
  } else if (playerC === "paper") {
    return "paper";
  } else {
    return "scissors";
  }
}

function computerPlay() {
  const play = ["rock", "paper", "scissors"];
  const choice = play[Math.floor(Math.random() * 3)];
  if (choice === "rock") {
    computerChoice.src = "img/rock.jpg";
  } else if (choice === "paper") {
    computerChoice.src = "img/paper.jpg";
  } else if (choice === "scissors") {
    computerChoice.src = "img/scissors.jpg";
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {
  result.textContent = "";
  console.log(computerSelection);
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      result.textContent = "It's a tie!";
      return 2;
    } else if (computerSelection == "paper") {
      result.textContent = "You Lose! Paper beats Rock";
      return 3;
    } else {
      result.textContent = "You Win! Rock beats Scissors";
      return 1;
    }
  }
  if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      result.textContent = "It's a tie!";
      return 2;
    } else if (computerSelection == "scissors") {
      result.textContent = "You Lose! Scissors beats Paper";
      return 3;
    } else {
      result.textContent = "You Win! Paper beats Rock";
      return 1;
    }
  }
  if (playerSelection == "scissors") {
    if (computerSelection == "scissors") {
      result.textContent = "It's a tie!";
      return 2;
    } else if (computerSelection == "rock") {
      result.textContent = "You Lose! Rock beats Scissors";
      return 3;
    } else {
      result.textContent = "You Win! Scissors beats Paper";
      return 1;
    }
  }
}
playRound(playerPlay(playerC), computerPlay());
function game() {
  let result;
  let cPlay = computerPlay();
  let pPlay = null;
  let pScore = 0;
  let cScore = 0;
  while (pScore < 5 && cScore < 5) {
    result = playRound(pPlay, cPlay);
    if (result == 1) {
      playerScore.textContent++;
      pScore++;
    } else if (result == 3) {
      computerScore.textContent++;
      cScore++;
    }
  }
}
// game();
