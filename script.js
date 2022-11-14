function animateHeader (text, xPos){
    gsap.from(text,{
        opacity: 0,
        duration: 3,
        x: xPos,
        ease:"Power.easeInOut"
    })
}
animateHeader('#title', -1000);
animateHeader('#subtitle', 1000);


const rock = document.querySelector("#btn1")
rock.addEventListener('click', e => {


    console.log(playRound("rock", getComputerChoice()))
    
})

const paper = document.querySelector("#btn2")
paper.addEventListener('click', e => {
   

    console.log(playRound('paper', getComputerChoice()))
    
})

const scissor = document.querySelector("#btn3")
scissor.addEventListener('click', e => {
    

    console.log(playRound("scissor", getComputerChoice()))
    
})



function getComputerChoice() {
    const choices = ["rock","paper","scissor"];
    let choice = choices[Math.floor(Math.random()*3)];
    return choice;
}

function playRound (playerSelection, computerSelection){
    let result;
    let text;
    switch (playerSelection){
        case "rock":
            if (computerSelection == "scissor"){
                result = 1;
            }
            else if(computerSelection == "paper"){
                result = -1;
            }
            break;
        case "paper":
            if (computerSelection == "rock"){
                result = 1;
            }
            else if(computerSelection == "scissor"){
                result = -1;
            }
            break;
        case "scissor":
            if (computerSelection == "paper"){
                result = 1;
            }
            else if(computerSelection == "rock"){
                result = -1;
            }
            break;
    }
    
    if (result == -1){
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




