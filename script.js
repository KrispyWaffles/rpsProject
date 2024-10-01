// COMPUTER LOGIC

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

function getComputerChoice (arr) {
    const randomSelection = Math.floor(Math.random() * arr.length); 
    return arr[randomSelection];
}

const picks = ["rock", "paper", "scissors"];
// let computerChoice = getComputerChoice(picks);


// button start game and rps seclection

let rockOption = document.createElement('button');
rockOption.textContent = 'rock';
document.body.appendChild(rockOption);

let paperOption = document.createElement('button');
paperOption.textContent = 'paper';
document.body.appendChild(paperOption);

let scissorsOption = document.createElement('button');
scissorsOption.textContent = 'scissors';
document.body.appendChild(scissorsOption);

let startGame = document.createElement('button');
startGame.textContent = 'Start Game';
document.body.appendChild(startGame); 




// USER SELECTION LOGIC

// function getHumanChoice () {
//     let humanChoice = prompt("Make a Choice. Rock, Paper or Scissors");
// // removed case sensitivity for user choice
//     humanChoice = humanChoice.toLowerCase();

//     if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
//         console.log(humanChoice);
//         alert("Choice Accepted");
//         return humanChoice;
//     } else {
//         alert("Invalid Choice. Try Again!");
//         return getHumanChoice(); // loops for invalid choice

//     }
   

// }





// GAME PLAY LOGIC

function playRound(humanChoice, computerChoice) {
    roundNumber++;
    console.log(`Round ${roundNumber}`);
    alert(`Round ${roundNumber}`);

    if (humanChoice === computerChoice) {
        alert (`Draw! Replay Round! Score You ${humanScore} - Computer ${computerScore}`);
        return;
    }
    // ROCK VS SCISSORS
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
            alert (`rock beats scissors. You get 1 point. Currnet Score: You ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
             alert (`rock beats scissors. Computer gets 1 point Currnet Score: You ${humanScore} - Computer ${computerScore}`);

    // SCISSORS VS PAPER
    } else if (humanChoice === "scissors" && computerChoice === "paper" ) {
        humanScore++;
            alert (`scissors beats paper. You get 1 point Currnet Score: You ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
            alert (`scissors beats paper. Computer gets 1 point Currnet Score: You ${humanScore} - Computer ${computerScore}`);
        
    // PAPER VS ROCK
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
            alert (`paper beats rock. Computer gets 1 point Currnet Score: You ${humanScore} - Computer ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
            alert (`paper beats rock. Computer gets 1 point Currnet Score: You ${humanScore} - Computer ${computerScore}`);
        
        }

    }

    // Check win for each round
    // if (humanScore === 1 || humanScore < 5) {
    //     alert(`You win Round: ${roundNumber}`);
    //     // return;
    // } else { 
    //     (computerScore === 1 || computerScore < 5) 
    //     alert(`The computer wins Round: ${roundNumber}`);
    //     // return;
    // }
   
   
    // Game win check
  
    function checkGameWin() {
    if (humanScore === 5) {
        alert(`Congratulations! You won the game! Total Rounds: ${roundNumber}`);
        return true;
    } else if  (computerScore === 5) {
        alert(`Game over! Computer wins the game! Total Rounds: ${roundNumber}`);
        return true;
    }
    return false;
}

    
    
    // function roundTracker (humanScore, computerScore) {
    //     let roundNumber = rounds.length +1;
        
    //     if (humanScore > computerScore || humanScore < computerScore) {
    //         roundNumber++;
    //     }
    // }




    while (humanScore < 5 && computerScore < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(picks);
    // let roundNumber = roundTracker(5); 

    playRound(humanChoice, computerChoice);
    
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
    console.log(roundNumber);
    

    // Check each round if game has been won
    if (checkGameWin()) {
        break; // stop game computer or human has won
    }


    console.log(`End of round ${roundNumber}. Current Score: You ${humanScore} - Computer ${computerScore}`);

}
    
    
    // score logic

// function keepScore () {
//     // let humanScore = 0;
//     // let computerScore = 0;
// s
//     if (humanScore === 5) {
//         return "You Win";
//     }

//     if (computerScore === 5) {
//         return "Computer Wins";
//     }
// }

  
 
//   keepScore();
  

// function getMyChoice () {
//     let selection = ["rock", "paper", "scissors"];
//     let choice = prompt("Make a Choice. Rock, Paper or Scissors");
   
//     if (choice !== selection) {
//         return prompt("Invaild Selection. Try Again!");
//     }
        
//     if (choice === picks) {
//         return ("Your Correct");
//     } 

//     if (choice !== picks)
//         return ("Wrong Answer!");
//     }

   

// getMyChoice();


// function getChoice () {
//     let selection = ["rock", "paper", "scissors"];
//     let choice = prompt("Choose. Rock, Paper or Scissors")

//     if (choice !== selection) {
//         return "Invalid. Try Again";
//     } else {
//         if (choice === selection) {
//             return "Here we go!";
//         } 
//     }
//  console.log(choice)
// }
// getChoice();



// let validChoice = false; 
// // let onlyOption = ["rock", "paper", "scissors"];

// while (validChoice) {
//     let userInput = prompt("Make a choice. The choices are: Rock, Paper or Scissors");

//     if (userInput === "rock" || "paper" || "scissors") {
//         validChoice = true;
//         console.log("Choice Accepted");
//     } else {
//         console.log("Invalid choice. Try Again!")

