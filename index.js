const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".btn-play");
const winner = document.querySelector("#winner");
const newGame = document.querySelector(".new-game")
let pScore = 0;
let cScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    startGame(button.textContent);
  });
});

newGame.addEventListener('click', () => {
  enableButtons(buttons)
  newGame.classList.remove('visible')
  newGame.classList.add('new-game')
  pScore = 0;
  cScore = 0;
  playerScore.textContent = 0
  computerScore.textContent = 0
  playerChoice.src = 'img/question-mark.png'
  computerChoice.src = 'img/question-mark.png'
  winner.textContent = "";
})
function disableButtons(buttons){
  buttons.forEach(button => {
    button.disabled = true
  })
}
function enableButtons(buttons){
  buttons.forEach(button => {
    button.disabled = false
  })
}

function startGame(choice) {
  let cPlay = computerPlay();
  let pPlay = choice.toLowerCase();
  playerChoice.src = `img/${pPlay}.jpg`;
  let res = playRound(pPlay, cPlay);
  if (res === 1) {
    pScore++;
    playerScore.textContent++;
  } else if (res === 3) {
    cScore++;
    computerScore.textContent++;
  }
  console.log(pScore);
  console.log(cScore);
  if (pScore=== 5) {
    winner.textContent = "CONGRATS! YOU WIN THE GAME";
    disableButtons(buttons)
    newGame.classList.remove('new-game')
    newGame.classList.add('visible')
  } else if (cScore === 5) {
    winner.textContent = "OW :( YOU LOUSE";
    disableButtons(buttons)
    newGame.classList.remove('new-game')
    newGame.classList.add('visible')
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
