/* First-page */



const choice = ['Rock', 'Paper', 'Scissors'];

const rockBtn = document.querySelector("#rockImage");
const paperBtn = document.querySelector("#paperImage");
const scissorsBtn = document.querySelector("#scissorsImage");
const para = document.querySelector("p");

rockBtn.addEventListener("click", () =>{
    let userChoice = "Rock";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    if (userChoice == "Rock" && compChoice == "Rock") {
        para.textContent = "It's a tie. You both chose Rock.";
    } else if (userChoice == "Rock" && compChoice == "Paper") {
        para.textContent = "Manoj wins! You chose Rock and he chose Paper.";
    } else if (userChoice == "Rock" && compChoice == "Scissors") {
        para.textContent = "You win! Manoj chose Scissors and you chose Rock.";
    } else {
        para.textContent = "";
    }  
});

function playRock() {
    let audio = document.getElementById("audioRock");
    audio.play();
}

function playPaper() {
    let audio = document.getElementById("audioPaper");
    audio.play();
}

function playScissors() {
    let audio = document.getElementById("audioScissors");
    audio.play();
}


paperBtn.addEventListener("click", () =>{
    let userChoice = "Paper";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    if (userChoice == "Paper" && compChoice == "Paper") {
        para.textContent = "It's a tie. You both chose Paper.";
    } else if (userChoice == "Paper" && compChoice == "Scissors") {
        para.textContent = "Manoj wins! You chose Paper and he chose Scissors.";
    } else if (userChoice == "Paper" && compChoice == "Rock") {
        para.textContent = "You win! Manoj chose Rock and you chose Paper.";
    } else {
        para.textContent = "";
    }
});

scissorsBtn.addEventListener("click", () =>{
    let userChoice = "Scissors";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    if (userChoice == "Scissors" && compChoice == "Scissors") {
        para.textContent = "It's a tie. You both chose Scissors.";
    } else if (userChoice == "Scissors" && compChoice == "Rock") {
        para.textContent = "Manoj wins! You chose Scissors and he chose Rock.";
    } else if (userChoice == "Scissors" && compChoice == "Paper") {
        para.textContent = "You win! Manoj chose Paper and you chose Scissors.";
    } else {
        para.textContent = "";
    }
});






