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
### Project2 Solution

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

```
