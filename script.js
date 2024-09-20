function getComputerChoice (arr) {
    const randomSelection = Math.floor(Math.random() * arr) 
    return arr[randomSelection];
}

const picks = ["rock", "paper", "scissors" ];
const randomChoice = getComputerChoice(picks);

console.log(getComputerChoice);

