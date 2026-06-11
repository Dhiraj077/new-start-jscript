// Math.random() * 100 + 1; // generates a random number between 1 and 100
// Math.floor(Math.random() * 100 + 1); // generates a random integer between 1 and 100

// let randomNum = Math.floor(Math.random() * 100 + 1);
// console.log(randomNum);

const randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");


let prevGuess = [];
let numOfGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < 1 || guess > 100){
        alert("Please enter a number between 1 and 100");
    }else{
        prevGuess.push(guess);
        if(numOfGuesses === 11){
            displayMessage(`Game Over! The number was ${randomNum}`);
            endGame();
        }else{
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){

}

function displayGuess(message){

}

function displayMessage(Message){

}

function endGame(){

}

function newGame(){

}

