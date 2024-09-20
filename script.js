function getComputerChoice (arr) {
    const randomSelection = Math.floor(Math.random() * arr.length); 
    return arr[randomSelection];
}

const picks = ["rock", "paper", "scissors"];
const randomChoice = getComputerChoice(picks);


console.log(randomChoice);

// function getMyChoice () {
//     let choice = prompt("Make a Choice. Rock, Paper or Scissors");
//     console.log(choice)
//     if (choice !== "rock" || choice !== "paper" || choice !== "scissors") {
//         console.log(choice)
//         return prompt("Invalid Selection");
//     }
//     console.log(choice);

// }
// getMyChoice();


function getMyChoice () {
    let selection = ["rock", "paper", "scissors"];
    let choice = prompt("Make a Choice. Rock, Paper or Scissors");
   
    if (choice !== selection) {
        return prompt("Invaild Selection. Try Again!");
    }
        
    if (choice === picks) {
        return ("Your Correct");
    } 
    
    if (choice !== picks)
        return ("Wrong Answer!");
    }

    // console.log(choice);

getMyChoice();