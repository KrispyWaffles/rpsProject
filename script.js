// COMPUTER LOGIC

let humanScore = 0;
let computerScore = 0;

function getComputerChoice (arr) {
    const randomSelection = Math.floor(Math.random() * arr.length); 
    return arr[randomSelection];
}

const picks = ["rock", "paper", "scissors"];
// let computerChoice = getComputerChoice(picks);


// console.log(computerChoice);


// USER SELECTION LOGIC

function getHumanChoice () {
    let humanChoice = prompt("Make a Choice. Rock, Paper or Scissors");
  
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        console.log(humanChoice);
        alert("Choice Accepted");
        return humanChoice;
    } else {
        alert("Invalid Choice. Try Again!");
        return getHumanChoice(); // loops for invalid choice

    }
   

}

// GAME PLAY LOGIC

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        alert ("Draw! Replay Round!");
        return;
    }
    // ROCK VS SCISSORS
    if (humanChoice === "rock" && computerChoice === "scissors") {
        alert ("rock beats scissors. You get 1 point");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert ("rock beats scissors. Computer gets 1 point");
        computerScore++;

    // SCISSORS VS PAPER
    } else if (humanChoice === "scissors" && computerChoice === "paper" ) {
        alert ("scissors beats paper. You get 1 point");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
            alert ("scissors beats paper. Computer gets 1 point");
        computerScore++;

    // PAPER VS ROCK
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert ("paper beats rock. Computer gets 1 point");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
            alert ("paper beats rock. Computer gets 1 point");
        computerScore++;
        }
}


    // WIN OR LOSE CHECK
    if (humanScore === 5) {
        alert("You win!");
        // return;
    } else { (computerScore === 5) 
        alert("Game over. Computer wins!");
        // return;
    }

    


    while (humanScore < 5 && computerScore < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(picks);  
    playRound(humanChoice, computerChoice);


    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);
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

