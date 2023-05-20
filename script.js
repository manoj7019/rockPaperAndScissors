/* First-page */



const choice = ['Rock', 'Paper', 'Scissors'];

const rockBtn = document.querySelector("#rockImage");
const paperBtn = document.querySelector("#paperImage");
const scissorsBtn = document.querySelector("#scissorsImage");

const para = document.querySelector("#paragraph");
const yoursScore = document.querySelector("#yourScore");
const manojsScore = document.querySelector("#manojScore");

/* rockBtn.addEventListener("click", () =>{
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
}); */

let yourScore = 0;
let manojScore = 0;

rockBtn.addEventListener("click", () =>{
    let userChoice = "Rock";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    if (userChoice == "Rock" && compChoice == "Rock") {
        para.textContent = "It's a tie. You both chose Rock.";
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else if (userChoice == "Rock" && compChoice == "Paper") {
        para.textContent = "Manoj wins! You chose Rock and he chose Paper.";
        manojScore++;
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else if (userChoice == "Rock" && compChoice == "Scissors") {
        para.textContent = "You win! Manoj chose Scissors and you chose Rock.";
        yourScore++;
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else {
        para.textContent = "";
    }  
});

paperBtn.addEventListener("click", () =>{
    let userChoice = "Paper";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    if (userChoice == "Paper" && compChoice == "Paper") {
        para.textContent = "It's a tie. You both chose Paper.";
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else if (userChoice == "Paper" && compChoice == "Scissors") {
        para.textContent = "Manoj wins! You chose Paper and he chose Scissors.";
        manojScore++;
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else if (userChoice == "Paper" && compChoice == "Rock") {
        para.textContent = "You win! Manoj chose Rock and you chose Paper.";
        yourScore++;
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else {
        para.textContent = "";
    }
});

scissorsBtn.addEventListener("click", () =>{
    let userChoice = "Scissors";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    if (userChoice == "Scissors" && compChoice == "Scissors") {
        para.textContent = "It's a tie. You both chose Scissors.";
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else if (userChoice == "Scissors" && compChoice == "Rock") {
        para.textContent = "Manoj wins! You chose Scissors and he chose Rock.";
        manojScore++;
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else if (userChoice == "Scissors" && compChoice == "Paper") {
        para.textContent = "You win! Manoj chose Paper and you chose Scissors.";
        yourScore++;
        yoursScore.textContent = `Your Score = ${yourScore}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore}`;
    } else {
        para.textContent = "";
    }
});

function playRock() {
    let audioRock = document.getElementById("audioOfRock");
    audioRock.play();
}

function playPaper() {
    let audioPaper = document.getElementById("audioOfPaper");
    audioPaper.play();
}

function playScissors() {
    let audioScissors = document.getElementById("audioOfScissors");
    audioScissors.play();
}



