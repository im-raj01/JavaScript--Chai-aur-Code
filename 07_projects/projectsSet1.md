# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


#Solution Code

## project 1

```javascript
console.log("raj")
const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector("body")

buttons.forEach( function(button){
    // console.log(button);
    button.addEventListener('click',function(event){
        // console.log(event);
        console.log(event.target);
        // if(event.target.id === 'grey'){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'white'){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'blue'){
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'yellow'){
        //     body.style.backgroundColor = event.target.id;
        // }

        body.style.backgroundColor = event.target.id;

    })
})

```
## Project2 Solution
 ```javascript
console.log("raj")

const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit' , function(event){
  event.preventDefault()
  const height = parseInt (document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  // console.log(height)
  // console.log(weight)
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //result show
  const results = document.querySelector('#results')
  let textNode;
  if(bmi < 18.6){
     textNode = document.createTextNode("you are underWeight")
  }
  else if(bmi > 18.6 && bmi <25){
     textNode = document.createTextNode("you are NormalWeight")
  }
  else{
     textNode = document.createTextNode("you are OverWeight")
  }
  results.innerHTML = bmi;
  const div = document.createElement('div');
  div.append(textNode)
  results.appendChild(div)



})

```Javascript
## project 3:
const clock = document.getElementById('clock');
// console.log(clock)
// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML =date.toLocaleTimeString()

},1000)

```
## project 4

```javascript
let randomNumber = (parseInt(Math.random()*100 +1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}
function validateGuess(guess){
    if(isNaN(guess)){
      alert('please Enter a valid no.')
    }
    else if(guess < 1){
      alert('please Enter a no more than 1')
    }
    else if(guess > 100){
      alert('please Enter a no less than 100')
    }
    else{
      prevGuess.push(guess)
      
      if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over, Random number was ${randomNumber}`)
        endGame()
      }
      else{
        displayGuess(guess)
        checkGuess(guess)
      }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
      displayMessage('You guessed it right')
      endGame()
    }
    else if(guess < randomNumber){
      displayMessage('No is too low')
    }
    else if(guess > randomNumber){
      displayMessage('No is too high')
    }
}
//cleanUp guess
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
      randomNumber =(parseInt(Math.random()*100 +1))
      prevGuess = []
      numGuess = 1;
      guessSlot.innerHTML = ''
      remaining.innerHTML = `${11 - numGuess}`;
      userInput.removeAttribute('disabled')
      startOver.removeChild(p)
      playGame = true;
    })
}





