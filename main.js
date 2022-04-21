//Dom variables
const selections = document.querySelectorAll(".selection");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");
const result = document.querySelector(".result");

// Make 3 selectors (rock, paper scissors)
selections.forEach(selection => selection.addEventListener("click", playRound));

// Computer's turn for one round
function computerPlay() {
    const rockPaperScissor = ["rock", "paper", "scissors"];
    return(rockPaperScissor[Math.floor(Math.random() * 3)]);
}
// Play one round of rock-paper-scissors
function playRound(e) {
    let playerSelection = e.currentTarget.value;
    let computerSelection = computerPlay();

    //Results
    if (playerSelection === computerSelection){
        result.textContent = `it's a tie, you both chose ${playerSelection}`;
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        lose()
        result.textContent = `You lose, paper beats rock`
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        win()
        result.textContent = `You win, rock beats scissors`;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        lose()
        result.textContent = `You lose, scissors beats paper`;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        win()
        result.textContent = `You win, paper beats rock`;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        lose()
        result.textContent = `You lose, rock beats scissors`;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        win()
        result.textContent = `You win, scissors beats paper`;
    }

    //Score results and winner/loser 
    score.textContent = `You ${playerCounter} : The Computer ${computerCounter}`
    if (playerCounter == 5) {
        winner.textContent = `GAME OVER!!!!
        YOU WON!`
        playerCounter = 0
        computerCounter = 0
        return  
    } else if(computerCounter === 5) {
        winner.textContent = `GAME OVER!!!!
        YOU LOSE!`
        playerCounter = 0
        computerCounter = 0
        return 
        
    }
    
};

//Score Counters
let playerCounter = 0;
let computerCounter = 0;
function win(){
    return playerCounter++
}
function lose(){
    return computerCounter++
}




