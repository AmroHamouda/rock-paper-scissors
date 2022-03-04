// computer turn randomly returns either "Rock", "Paper" or "Scissors"
function computerPlay() {
    const rockPaperScissor = ["rock", "paper", "scissors"];
    return(rockPaperScissor[Math.floor(Math.random() * 3)]);
}
// play one round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return `it's a tie, you both chose ${playerSelection}`
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        lose()
        return `You lose, paper beats rock`
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        win()
        return `You win, rock beats scissors`
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        lose()
        return `You lose, scissors beats paper`
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        win()
        return `You win, paper beats rock`
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        lose()
        return `You lose, rock beats scissors`
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        win()
        return `You win, scissors beats paper`
    }
};
//play 5 games of rock-paper-scissors
function game(playerSelection, computerSelection) {
    // let counter = 0;
    for (let i = 1; i <= 5; i++) {
    playerSelection = prompt("Choose rock or paper or scissors");
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`You ${playerCounter} : The computer ${computerCounter}`)
    }

    if (playerCounter > computerCounter){
        console.log( `You win, the score is ${playerCounter}:${computerCounter}`)
    } else if (playerCounter < computerCounter) {
        console.log( `You lose, the score is ${playerCounter}:${computerCounter}`)
    } else {
        console.log( `it's a tie, the score is ${playerCounter}:${computerCounter}`)
    }
}


let win = function(){
    return playerCounter++
}
let lose = function(){
    return computerCounter++
}
let playerCounter = 0;
let computerCounter = 0;
let playerSelection
let computerSelection
game(playerSelection, computerSelection);