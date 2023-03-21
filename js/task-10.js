// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
//  після чого рендериться колекція. Натисненням на кнопку Очистити,
//   колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//  у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputQuantity: document.querySelector("input[type=number]"),
  battonCreate: document.querySelector("[data-create]"),
  battonDestroy: document.querySelector("[data-destroy]"),
  boxesBloks: document.querySelector("#boxes"),

}

refs.battonCreate.addEventListener("click", () => {
createBoxes(Number(refs.inputQuantity.value))
});

refs.battonDestroy.addEventListener("click", () => {
  refs.boxesBloks.innerHTML = "";
});


function createBoxes(amount) {

let boxSize = 30;
let allElementOfBox = "";


for(let i = 0; i <= amount; i++) {
  let boxBackgroundColor = getRandomHexColor();
  let boxElement = `<div class = 'new-box' style = 'background-color:${boxBackgroundColor}; 
  width: ${boxSize + i * 10}px; 
  heigth: ${boxSize + i * 10}px;'></div>`;

  allElementOfBox += boxElement;
  console.log(allElementOfBox);
}
refs.boxesBloks.insertAdjacentHTML("beforeend", allElementOfBox); 
}


function destroyBoxes() {
  
  refs.boxesBloks.innerHTML = "";

}