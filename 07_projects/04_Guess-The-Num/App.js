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
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`Congratulatons! You guessed the number!`);
        endGame();
    }else if(guess < randomNum){
        displayMessage(`Too low! Try again!`);
    }else if(guess > randomNum){
        displayMessage(`Too high! Try again!`);
    }
}

function displayGuess(message){
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numOfGuesses++;
    remaining.innerHTML = `${11 - numOfGuesses} guesses remaining`;

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(){
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numOfGuesses} guesses remaining`;
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })
}

