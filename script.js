function getComputerChoice() {
    const choices = ["rock","paper","scissor"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound (playerSelection, computerSelection){
    let result;
    let text;
    switch (playerSelection.toLowerCase()){
        case "rock":
            if (computerSelection == "rock"){
                result = -1;
            }
            else if(computerSelection == "scissor"){
                result = 1;
            }
            else result = 0;
            break;
        case "paper":
            if (computerSelection == "rock"){
                result = 1;
            }
            else if(computerSelection == "scissor"){
                result = 0;
            }
            else result = -1;
            break;
        case "scissor":
            if (computerSelection == "rock"){
                result = 1;
            }
            else if(computerSelection == "scissor"){
                result = -1;
            }
            else result = 0;
            break;
    }
    
    if (result == 0){
        text = 'You Lose! '+ computerSelection +' beats '+ playerSelection+'. ';
    }
    else if (result == 1){
        text = 'You Win! ' + playerSelection+' beats '+ computerSelection+'. ';
    }
    else text = "Its a Tie!! "

    return text;
}

function game(){
    let choice;
    let result;
    for (let i = 0; i < 5; i++){
        choice = prompt("Please choose: Rock, Paper or Scissor");
        result = playRound(choice, getComputerChoice());
        if (result.indexOf("Win") != -1){
            wins++;
        }
        else if (result.indexOf("Lose") != -1){
            losses++;
        }

        return result + "Number of Wins: " + wins + " Number of Loses: " +losses;

    }
}
let wins = 0;
let losses = 0;

for(let i= 0; i<5; i++){
    console.log(game())
}