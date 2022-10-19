function computerRandom(){
    let rando = Math.floor(Math.random()*3);
    if (rando == 0) {
        return "rock";
    }
    else if (rando == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

function playerChoose(){

    let player = "";

    while (["rock","paper","scissors"].indexOf(player) == -1){
        player = prompt("Rock, Paper, or Scissors?").toLowerCase();
    }
    return player;
}

function compare(player, computer){

    let display = document.querySelector(".round-winner-display");

    if (player == computer){
        display.innerHTML = "tie!";
        return "tie";
    }
    else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        if (playerScore < 4){
            display.innerHTML = `you win! ${player} beats ${computer}!`;
            playerScore += 1;
            playerDisplay.innerHTML = playerScore;
        }
        else{
            display.innerHTML = "you won!"
            playerScore = 0;
            computerScore = 0;
            playerDisplay.innerHTML = playerScore;
            computerDisplay.innerHTML = computerScore;
        }
    }
    else {
        if (computerScore < 4){
            display.innerHTML = `you lose! ${computer} beats ${player}`;
            computerScore +=1;
            computerDisplay.innerHTML = computerScore;
        }
        else{
            display.innerHTML = "you lost!"
            playerScore = 0;
            computerScore = 0;
            playerDisplay.innerHTML = playerScore;
            computerDisplay.innerHTML = computerScore;
        }
    }

}

function playRound(player){
    let computer = computerRandom()
    let result = compare(player, computer);

    return result;
}

function game(rounds=5){

    let playerWins = 0;
    let computerWins = 0;

    while (rounds > 0){
        let result = playRound();
        if (result == "player"){
            playerWins +=1;
            rounds --;
        }
        else if (result == "computer"){
            computerWins +=1;
            rounds --;
        }
        else {
            rounds --;
        }
    }

    if (playerWins > computerWins){
        console.log(`player wins! ${playerWins} to ${computerWins}`)
    }
    else if (playerWins < computerWins){
        console.log (`computer wins! ${computerWins} to ${playerWins}`)
    }
    else {
        console.log ('tie!')
    }
}

let playerScore = 0;
let computerScore = 0;
let playerDisplay = document.querySelector(".score.player");
let computerDisplay = document.querySelector(".score.computer");


const buttons = document.querySelectorAll("img");

buttons.forEach((e) => {
    e.addEventListener('click', function(){
        playRound(e.className);
    })
});

game();


