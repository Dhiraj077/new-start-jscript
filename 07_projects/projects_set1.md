# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 Solution

```javascript
console.log('JS')

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})

````

## Project 2 Solution

```javascript

const form = document.querySelector('form')
// this below use case line no.3 will give you empty not recommended
// const height = parseInt(document.querySelector('#height).value)

form.addEventListener('submit', function(e){
    e.preventDefault() // prevent the page from getting refreshed on submit

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')
    const wguide = document.querySelector('#weight-guide')

    if (height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if (weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<h2>Your BMI is ${bmi}</h2>`
        if (bmi <= 18.49) {
            wguide.innerHTML = 'You are underweight'
    } else if (bmi >= 18.50 && bmi <= 24.99){
        wguide.innerHTML = "You're at healthy weight"
    } else if (bmi >= 24.99){
        wguide.innerHTML = 'You have overweight'
    }
}
})

``````

## Project 3 Solution

`````javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```````

## project 4 Solution

`````javascript

 // Math.random() * 100 + 1; // generates a random number between 1 and 100
// Math.floor(Math.random() * 100 + 1); // generates a random integer between 1 and 100

// let randomNum = Math.floor(Math.random() * 100 + 1);
// console.log(randomNum);

let randomNum = parseInt(Math.random() * 100 + 1);

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

`````````````


## Project 5 Solution

``` Javascript

// generate a random color in hex format

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;

// start changing the background color every second

let intervalId

    const startChangingColor = function() {

        if (!intervalId) { // only start if there isn't already an interval running
            intervalId = setInterval(changingColor, 1000);
        }
        
        function changingColor(){
            document.body.style.backgroundColor = randomColor();
        }
    }
    const stopChangingColor = function() {
        clearInterval(intervalId);
        intervalId = null; // stop the interval and reset the id
    }

    document.querySelector('#start').addEventListener('click', startChangingColor);

    document.querySelector('#stop').addEventListener('click', stopChangingColor);
}


```````

## Project 6 Solution

```` JavaScript

const insert = document.getElementById("insert");

window.addEventListener('keydown', (e) => {
      insert.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

    </div>
    `
})

```````


