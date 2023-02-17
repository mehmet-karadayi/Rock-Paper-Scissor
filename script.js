function animateHeader(text, xPos) {
    gsap.from(text, {
        opacity: 0,
        duration: 3,
        x: xPos,
        ease: "Power.easeInOut"
    })
}
animateHeader('#title', -1000);
animateHeader('#subtitle', 1000);




let wins = 0;
let losses = 0;
let reset = true;
let results = {};



const center = document.querySelector('#center');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const centerContent = document.createElement('div');
const rightContent = document.createElement('div');
const leftContent = document.createElement('div');
leftContent.style.cssText = "background-color:black; height: 5em; color: white; font-family: 'Press Start 2P'; text-align: center; display: flex; justify-content: center; align-items: center;"
rightContent.style.cssText = "background-color:black; height: 5em; color: white; font-size: 'Larger'; font-family: 'Press Start 2P'; text-align: center; display: flex; justify-content: center; align-items: center;"
centerContent.style.cssText = "background-color:black; height: 5em; color: white; font-size: 'Larger'; font-family: 'Press Start 2P'; text-align: center; display: flex; justify-content: center; align-items: center;"


const playButton = document.querySelector("#btn4");
playButton.addEventListener('click', e => { 
    reset = false;
    playButton.parentNode.removeChild(playButton);
    resetGame();
});


const rock = document.querySelector("#btn1")
rock.addEventListener('click', e => {
    if(!reset){
        results = playRound(rock.name, getComputerChoice());
        centerContent.textContent = results.outcome;
        rightContent.textContent = results.totalLosses;
        leftContent.textContent = results.totalWins;
        center.appendChild(centerContent);
        right.appendChild(rightContent);
        left.appendChild(leftContent)
        alertPlayer();
    }
    
});


const paper = document.querySelector("#btn2")
paper.addEventListener('click', e => {
    if(!reset){
    results = playRound(paper.name, getComputerChoice());
    centerContent.textContent = results.outcome;
    rightContent.textContent = results.totalLosses;
    leftContent.textContent = results.totalWins;
    center.appendChild(centerContent);
    right.appendChild(rightContent);
    left.appendChild(leftContent)
    alertPlayer();
    }
});


const scissor = document.querySelector("#btn3")
scissor.addEventListener('click', e => {
    if(!reset){
    results = playRound(scissor.name, getComputerChoice());
    centerContent.textContent = results.outcome;
    rightContent.textContent = results.totalLosses;
    leftContent.textContent = results.totalWins;
    center.appendChild(centerContent);
    right.appendChild(rightContent);
    left.appendChild(leftContent)
    alertPlayer();
    }
});





function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}



function playRound(playerSelection, computerSelection) {
    let outcome = 0;
    let text;


    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissor") {
                outcome = 1;
            }
            else if (computerSelection === "Paper") {
                outcome = -1;
            }
            break;
        case "Paper":
            if (computerSelection === "Rock") {
                outcome = 1;
            }
            else if (computerSelection === "Scissor") {
                outcome = -1;
            }
            break;
        case "Scissor":
            if (computerSelection === "Paper") {
                outcome = 1;
            }
            else if (computerSelection === "Rock") {
                outcome = -1;
            }
            break;
    }

    if (outcome === -1) {
        text = 'You Lose! ' + computerSelection + ' beats ' + playerSelection + '. ';
        losses++;
    }
    else if (outcome === 1) {
        text = 'You Win! ' + playerSelection + ' beats ' + computerSelection + '. ';
        wins++;
    }
    else text = "Its a Tie!!";

    return {
        outcome: text,
        totalWins: wins,
        totalLosses: losses
    };
}

function alertPlayer () {
    const replay = document.createElement('button');
    replay.innerText = 'REPLAY?';
    replay.setAttribute('id', 'btn4');

    if(wins === 5){
        centerContent.textContent = "YOU WON!!! YOU BEAT THE COMPUTER!!!";
        center.appendChild(centerContent);
        center.appendChild(replay);
        replay.addEventListener('click', () => {
            replay.parentNode.removeChild(replay);
            resetGame();
        });
    }  
    
    else if(losses === 5){
        centerContent.textContent = "YOU LOST!!! THE COMPUTER BEAT YOU!!!";
        center.appendChild(centerContent);
        center.appendChild(replay);
        replay.addEventListener('click', () => {
            replay.parentNode.removeChild(replay);
            resetGame();
        });
        
    }
}

function resetGame(){
    wins = 0;
    losses = 0;
    centerContent.textContent = "";
    rightContent.textContent = losses;
    leftContent.textContent = wins;
    center.appendChild(centerContent);
    right.appendChild(rightContent);
    left.appendChild(leftContent);
}




