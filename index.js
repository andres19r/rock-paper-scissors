// function computerPlay() {
//    const play = ['Rock','Paper','Scissors'] 
//    return play[Math.floor(Math.random() * 3)]
// }
// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase()
//     computerSelection = computerSelection.toLowerCase()
//     if (playerSelection == 'rock') {
//         if (computerSelection == 'rock') {
//             console.log("It's a tie!");
//             return 2
//         }else if (computerSelection == 'paper') {
//             console.log("You Lose! Paper beats Rock");
//             return 3
//         }else{
//             console.log("You Win! Rock beats Scissors");
//             return 1
//         }
//     }
//     if (playerSelection == 'paper') {
//         if (computerSelection == 'paper') {
//             console.log("It's a tie!");
//             return 2
//         }else if (computerSelection == 'scissors') {
//             console.log("You Lose! Scissors beats Paper");
//             return 3
//         }else{
//             console.log("You Win! Paper beats Rock");
//             return 1
//         }
//     }
//     if (playerSelection == 'scissors') {
//         if (computerSelection == 'scissors') {
//             console.log("It's a tie!");
//             return 2
//         }else if (computerSelection == 'rock') {
//             console.log("You Lose! Rock beats Scissors");
//             return 3
//         }else{
//             console.log("You Win! Scissors beats Paper");
//             return 1
//         }
//     }
// }
// function game() {
//     let playerScore = 0
//     let computerScore = 0
//     let playerSelection 
//     let computerSelection 
//     let result
//     for (let i = 0; i < 5; i++) {
//         // playerSelection = prompt("Rock, Papper or Scissors?")
//         computerSelection = computerPlay()
//         result = playRound(playerSelection, computerSelection)
//         if (result == 1) {
//             playerScore ++
//         }else if (result == 3) {
//             computerScore ++
//         }
//         console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
//     }
// }
// game()

const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissors = document.querySelector('#btn-scissors')
const playerChoice = document.querySelector('#player-choice')

btnRock.addEventListener('click', () => {
	playerChoice.src = 'img/rock.jpg'
})
btnPaper.addEventListener('click', () => {
	playerChoice.src = 'img/paper.jpg'
})
btnScissors.addEventListener('click', () => {
	playerChoice.src = 'img/scissors.jpg'
})