function getComputerChoice (arr) {
    const randomSelection = Math.floor(Math.random() * arr.length); 
    return arr[randomSelection];
}

const picks = ["rock", "paper", "scissors" ];
const randomChoice = getComputerChoice(picks);


console.log(randomChoice);

function getMyChoice () {
    let choice = prompt("Make a Choice. Rock, Paper or Scissors");

    if (choice !== "rock" || "paper" || "scissors") {
        return prompt("Invalid Selection");
    }


}
getMyChoice();