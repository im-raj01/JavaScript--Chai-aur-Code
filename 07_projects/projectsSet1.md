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