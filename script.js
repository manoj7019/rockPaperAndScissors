const choice = ['Rock', 'Paper', 'Scissors'];
const manojWish = ['Remove your socks with your teeth', 'Write your name on the floor with your tongue', 'Eat a spoonful of pepper', 'Eat an egg shell', 'Stand on your knees for an hour', 'Lick a train wheel', 'Do 1000 push-ups', 'Do 1000 squats', 'Eat a whole book', 'Eat an entire raw onion without slicing it', 'Go ask someone to adopt you', 'Go jump from Burj Khalifa', 'Handstand for 10 minutes', 'Lick your elbow', 'Do a moonwalk better than Michael Jackson ', 'Go climb the Mount Everest now', 'Crack a coconut on your head', 'Dump a bucket of ice water on your head', 'Go eat 10 chillies', 'Do a bellydance', 'Go eat a raw chicken', 'Sing Despacito without a single mistake', 'Go eat a cup of salt', 'Drink a big can of Soda', 'Go shave your eyebrows', 'Keep 3 ice cubes in your mouth until they melt', 'Drink a litre of vinegar', 'Go watch a movie "The Emoji" ', 'Gift Manoj a bitcoin', 'Buy Manoj a Mercedes'];
const yourWish =['Congratulations'];

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

yoursScore.textContent = `Your Score = ${yourScore}`;
manojsScore.textContent = `Manoj's Score = ${manojScore}`;

rockBtn.addEventListener("click", function selectRock() {
    let userChoice = "Rock";
    let compChoice = choice[Math.floor(Math.random() * choice.length)];

    if (userChoice == "Rock" && compChoice == "Rock") {
        para.textContent = "It's a tie. You both chose Rock.";
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Rock" && compChoice == "Paper") {
        para.textContent = "Manoj wins! You chose Rock and he chose Paper.";
        manojScore++;
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Rock" && compChoice == "Scissors") {
        para.textContent = "You win! Manoj chose Scissors and you chose Rock.";
        yourScore++;
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!\n${getManojWish}.`;
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
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Paper" && compChoice == "Scissors") {
        para.textContent = "Manoj wins! You chose Paper and he chose Scissors.";
        manojScore++;
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Paper" && compChoice == "Rock") {
        para.textContent = "You win! Manoj chose Rock and you chose Paper.";
        yourScore++;
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!\n${getManojWish}.`;
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
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Scissors" && compChoice == "Rock") {
        para.textContent = "Manoj wins! You chose Scissors and he chose Rock.";
        manojScore++;
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!\n${getManojWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else {
            result.textContent = "";
        }
    } else if (userChoice == "Scissors" && compChoice == "Paper") {
        para.textContent = "You win! Manoj chose Paper and you chose Scissors.";
        yourScore++;
        yoursScore.textContent = `Your Score = ${yourScore.toString()}`;
        manojsScore.textContent = `Manoj's Score = ${manojScore.toString()}`;
        if (yourScore == '5') {
            result.textContent = `You won the game!\n${getYourWish}.`;
            refresh.textContent = `Refresh the page to play again`;
        } else if (manojScore == '5') {
            result.textContent = `You lost the game!n${getManojWish}.`;
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