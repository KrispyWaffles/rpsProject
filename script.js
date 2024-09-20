function getComputerChoice (arr) {
    const randomSelection = Math.floor(Math.random() * arr.length); 
    return arr[randomSelection];
}

const picks = ["rock", "paper", "scissors"];
const randomChoice = getComputerChoice(picks);


console.log(randomChoice);


function getMyChoice () {
    let choice = prompt("Make a Choice. Rock, Paper or Scissors");
    console.log(choice)
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        console.log(choice)
        return alert("Choice Accepted");
    } else {
        alert("Invalid Choice. Try Again!");
        return getMyChoice();

    }
    console.log(choice);

}
getMyChoice();


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