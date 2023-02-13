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

// Number of games selection
const four = document.querySelector("#btn4");
const five = document.querySelector("#btn5");
const six = document.querySelector("#btn6");
//*************************************** */


let numOfRounds = 0;
let wins = 0;
let losses = 0;

// Number of games button event listeners
four.addEventListener('click', e => {
    numOfRounds = Number(four.name);
    tog(four, five.value, six.value);

}, {once: true});
five.addEventListener('click', e => {
    numOfRounds = Number(five.name);
    tog(five, four.value, six.value);
    
});
six.addEventListener('click', e => {
    numOfRounds = Number(six.name);
    tog(six, four.value, five.value);
    
    
});
//*************************************** */

// Appending the divs for the output of results
const center = document.querySelector('#center');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
const centerContent = document.createElement('div');
const rightContent = document.createElement('div');
const leftContent = document.createElement('div');
leftContent.style.cssText = "background-color:black; height: 5em; color: white; font-family: 'Press Start 2P'; text-align: center; display: flex; justify-content: center; align-items: center;"
rightContent.style.cssText = "background-color:black; height: 5em; color: white; font-size: 'Larger'; font-family: 'Press Start 2P'; text-align: center; display: flex; justify-content: center; align-items: center;"
centerContent.style.cssText = "background-color:black; height: 5em; color: white; font-size: 'Larger'; font-family: 'Press Start 2P'; text-align: center; display: flex; justify-content: center; align-items: center;"
centerContent.classList.add('content');
rightContent.classList.add('content');
leftContent.classList.add('content');
//*************************************** */


//*************************************** */
const turnOff = (btn) => {
    wins = 0;
    losses = 0;
    numOfRounds = 0;
    btn.style.cssText = 'background-color: black; color: white';
    btn.value = "OFF";
    console.log(btn.value);
}
//*************************************** */

//*************************************** */
const tog = (btn, val1, val2) => {
    if (btn.value !== "ON" && val1 === "OFF" && val2 === "OFF") {
        btn.style.cssText = 'background-color: white; color:black;';
        btn.value = "ON";
        play(btn);
        console.log(btn.value)
    }
    else {
        turnOff(btn);
    }
}

//*************************************** */

//*************************************** */
const play = (btn) => {
    // if (btn.value === "ON" && val1 === "OFF" && val2 === "OFF") && numOfRounds > 0) {
        let results;
        
        const rock = document.querySelector("#btn1")
        rock.addEventListener('click', e => {
            results = playRound("rock", getComputerChoice(), btn);
            centerContent.textContent = results.outcome;
            rightContent.textContent = results.totalLosses;
            leftContent.textContent = results.totalWins;
            center.appendChild(centerContent);
            right.appendChild(rightContent);
            left.appendChild(leftContent);
            if (numOfRounds === 0){
                turnOff(btn);
                
            }
            
        }, {once: true});
        
        
        const paper = document.querySelector("#btn2")
        paper.addEventListener('click', e => {
            results = playRound("paper", getComputerChoice(), btn);
            centerContent.textContent = results.outcome;
            rightContent.textContent = results.totalLosses;
            leftContent.textContent = results.totalWins;
            center.appendChild(centerContent);
            right.appendChild(rightContent);
            left.appendChild(leftContent);
            if (numOfRounds === 0){
                turnOff(btn);
                
            }
            
        }, {once: true})
        

        const scissor = document.querySelector("#btn3")
        scissor.addEventListener('click', e => {
            results = playRound("scissor", getComputerChoice(), btn);
            centerContent.textContent = results.outcome;
            rightContent.textContent = results.totalLosses;
            leftContent.textContent = results.totalWins;
            center.appendChild(centerContent);
            right.appendChild(rightContent);
            left.appendChild(leftContent);
            if (numOfRounds === 0){
                turnOff(btn);
                
            }

            
        }, {once: true})
        
        
    // }
    
    //  else turnOff(btn);
        
}
//*************************************** */


//*************************************** */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}



function playRound(playerSelection, computerSelection, btn) {
    if(numOfRounds <= 0) turnOff(btn);
    let outcome = 0;
    let text;
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissor") {
                outcome = 1;
            }
            else if (computerSelection === "paper") {
                outcome = -1;
            }
        break;
        case "paper":
            if (computerSelection === "rock") {
                outcome = 1;
            }
            else if (computerSelection === "scissor") {
                outcome = -1;
            }
        break;
        case "scissor":
            if (computerSelection === "paper") {
                outcome = 1;
            }
            else if (computerSelection === "rock") {
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
    
    console.log(numOfRounds);
    numOfRounds--;
    console.log(numOfRounds);
  
    return {
        outcome: text,
        totalWins: wins,
        totalLosses: losses
    };
}
//*************************************** */

// function game() {
    
//     let choice;
//     let result;
//     for (let i = 0; i < 5; i++) {
//         choice = prompt("Please choose: Rock, Paper or Scissor");
//         result = playRound(choice, getComputerChoice());
//         if (result.indexOf("Win") != -1) {
//             wins++;
//         }
//         else if (result.indexOf("Lose") != -1) {
//             losses++;
//         }

//         return result + "Number of Wins: " + wins + " Number of Loses: " + losses;

//     }
// }





