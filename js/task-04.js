
let counterValue = 0;

let valueNow = document.querySelector('#value');

const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonIncrement.addEventListener('click', () => {
   counterValue += 1;
   valueNow.textContent = counterValue;
});

const buttonDecrement = document.querySelector('[data-action="decrement"]');
console.log(buttonDecrement);
buttonDecrement.addEventListener('click', () => {
   counterValue -= 1;
   valueNow.textContent = counterValue;
})


  
