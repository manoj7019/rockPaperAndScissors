const choice = ['Rock', 'Paper', 'Scissors'];
const manojWish = ['Take Manoj for a date', 'Take him for a nightout','Go for a long walk with him', 'Buy Manoj an ice-cream', 'Go propose Manoj', 'Sing a song for Manoj', 'Give Manoj a kiss', 'Send Manoj your most embarrassing pic', 'Give Manoj 3 sincere compliments', 'Tell Manoj one of your darkest secrets'];
const yourWish =['Ask Manoj to take you for a date', 'Ask Manoj to take you for a nightout', 'Ask Manoj to take you for a long walk', 'Ask Manoj to get you an ice-cream', 'Ask Manoj to propose you', 'Ask Manoj to sing a song for you', 'Ask Manoj to breakup with his girlfriend', 'Ask Manoj to send you his favorite pic', 'Ask Manoj to give you 3 sincere compliments', 'Ask Manoj one of his darkest secrets'];

const rockBtn = document.querySelector("#rockImage");
const paperBtn = document.querySelector("#paperImage");
const scissorsBtn = document.querySelector("#scissorsImage");

const para = document.querySelector("#paragraph");
const yoursScore = document.querySelector("#your-Score");
const manojsScore = document.querySelector("#manoj-Score");
const result = document.querySelector("#finalResult");
const refresh = document.querySelector("#refreshInstruction");

let getManojWish = manojWish[Math.floor(Math.random() * manojWish.length)];
let getYourWish = yourWish[Math.floor(Math.random() * yourWish.length)];

let yourScore = 0;
let manojScore = 0;

yoursScore.textContent = `Zara's Score = ${yourScore}`;
manojsScore.textContent = `Manoj's Score = ${manojScore}`;

rockBtn.addEventListener("click", function selectRock() {
    let userChoice = "Rock";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];

    if (userChoice == "Rock" && compChoice == "Rock") {
        para.textContent = "It's a tie. You both chose Rock.";
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Rock" && compChoice == "Paper") {
        para.textContent = "Manoj wins! You chose Rock and he chose Paper.";
        manojScore++;
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Rock" && compChoice == "Scissors") {
        para.textContent = "You win! Manoj chose Scissors and you chose Rock.";
        yourScore++;
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else {
        para.textContent = "";
    }
});

paperBtn.addEventListener("click", function selectPaper() {
    let userChoice = "Paper";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    if (userChoice == "Paper" && compChoice == "Paper") {
        para.textContent = "It's a tie. You both chose Paper.";
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Paper" && compChoice == "Scissors") {
        para.textContent = "Manoj wins! You chose Paper and he chose Scissors.";
        manojScore++;
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Paper" && compChoice == "Rock") {
        para.textContent = "You win! Manoj chose Rock and you chose Paper.";
        yourScore++;
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else {
        para.textContent = "";
    }
});

scissorsBtn.addEventListener("click", function selectScissors() {
    let userChoice = "Scissors";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];
    
    if (userChoice == "Scissors" && compChoice == "Scissors") {
        para.textContent = "It's a tie. You both chose Scissors.";
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Scissors" && compChoice == "Rock") {
        para.textContent = "Manoj wins! You chose Scissors and he chose Rock.";
        manojScore++;
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Scissors" && compChoice == "Paper") {
        para.textContent = "You win! Manoj chose Paper and you chose Scissors.";
        yourScore++;
        yoursScore.textContent = `Zara's Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `Manoj won the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else {
        para.textContent = "";
    }
});

function disableImage() {
    if((yourScore == '5') || (manojScore == '5')) {
        document.getElementById("rockImage").disabled = true;
        document.getElementById("paperImage").disabled = true;
        document.getElementById("scissorsImage").disabled = true;
    } else {
        document.getElementById("rockImage").disabled = false;
        document.getElementById("paperImage").disabled = false;
        document.getElementById("scissorsImage").disabled = false;
    }
}

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