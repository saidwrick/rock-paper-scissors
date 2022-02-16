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

    if (player == computer){
        console.log("tie!");
        return "tie";
    }
    else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")){
        console.log(`you win! ${player} beats ${computer}!`);
        return "player";
    }
    else {
        console.log(`you lose! ${computer} beats ${player}`);
        return "computer";
    }

}

function playRound(){
    let computer = computerRandom()
    let player = playerChoose()
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


