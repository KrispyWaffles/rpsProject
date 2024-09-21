// computer logic

function getComputerChoice (arr) {
    const randomSelection = Math.floor(Math.random() * arr.length); 
    return arr[randomSelection];
}

const picks = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice(picks);


// console.log(computerChoice);


// user selection logic 

function getHumanChoice () {
    let humanChoice = prompt("Make a Choice. Rock, Paper or Scissors");
  
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        alert("Choice Accepted");
        return humanChoice;
    } else {
        alert("Invalid Choice. Try Again!");
        return getHumanChoice();

    }


    console.log(humanChoice);

}
const humanChoice = getHumanChoice();



// score logic

function keepScore () {
    let humanScore = 0;
    let computerScore = 0;

    if (humanScore === 5) {
        return "You Wins";
    }

    if (computerScore === 5) {
        return "Computer Wins";
    }
}

// game play logic

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert ("Draw! Replay Round!");
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        alert ("rock beats scissors. You get 1 point");
    } else {
       if (humanChoice === "scissors" && computerChoice === "rock") {
        alert ("rock beats scissors. Computer gets 1 point");
    }
    if (humanChoice === "scissors" && computerChoice === "paper" ) {
        alert ("scissors beats paper. You get 1 point");
    } else {
        if (humanChoice === "paper" && computerChoice === "scissors") {
            alert ("scissors beats paper. Computer gets 1 point");
        }
    if (humanChoice === "paper" && computerChoice === "rock") {
        alert ("paper beats rock. Computer gets 1 point");
    } else {
        if (humanChoice === "rock" && computerChoice === "paper") {
            alert ("paper beats rock. Computer gets 1 point");
        }
    }
}
    }
    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
         

}

  
  

  
  playRound(humanChoice, computerChoice);
  

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
//     }
// }