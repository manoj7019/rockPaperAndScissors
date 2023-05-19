let choice = ['Rock', 'Paper', 'Scissors'];

const rockBtn = document.querySelector("#rockImage");
const paperBtn = document.querySelector("#paperImage");
const scissorsBtn = document.querySelector("#scissorsImage");


function playedRock() {
    let userChoice = "Rock"
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
        if (userChoice == "Rock" && compChoice == "Rock") {
            console.log(`It's a tie. You both chose ${compChoice}.`);
        } else if (userChoice == "Rock" && compChoice == "Paper") {
            console.log(`Manoj wins! You chose Rock and he chose ${compChoice}.`);
        } else if (userChoice == "Rock" && compChoice == "Scissors") {
            console.log(`You win! Manoj chose ${compChoice} and you chose Rock.`);
        } else {
            console.log(`Nothing!`);
        }
}
function playedPaper() {
    let userChoice = "Paper"
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
        if (userChoice == "Paper" && compChoice == "Paper") {
            console.log(`It's a tie. You both chose ${compChoice}.`);
        } else if (userChoice == "Paper" && compChoice == "Scissors") {
            console.log(`Manoj wins! You chose Paper and he chose ${compChoice}.`);
        } else if (userChoice == "Paper" && compChoice == "Rock") {
            console.log(`You win! Manoj chose ${compChoice} and you chose Paper.`);
        } else {
            console.log(`Nothing!`);
        }
}
function playedScissors() {
    let userChoice = "Scissors"
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
        if (userChoice == "Scissors" && compChoice == "Scissors") {
            console.log(`It's a tie. You both chose ${compChoice}.`);
        } else if (userChoice == "Scissors" && compChoice == "Rock") {
            console.log(`Manoj wins! You chose Scissors and he chose ${compChoice}.`);
        } else if (userChoice == "Scissors" && compChoice == "Paper") {
            console.log(`You win! Manoj chose ${compChoice} and you chose Scissors.`);
        } else {
            console.log(`Nothing!`);
        }
}

rockBtn.addEventListener("click", playedRock);
paperBtn.addEventListener("click", playedPaper);
scissorsBtn.addEventListener("click", playedScissors);







