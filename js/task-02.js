const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const totalListRef = document.querySelector("#ingredients");

const ingredientsName = ingredients.map((element) => {
const createTotalList = document.createElement("li");

createTotalList.textContent = element;
createTotalList.classList.add('element');

return createTotalList;
});
totalListRef.append(...ingredientsName);





// const li1 = document.createElement("li");
// const liText1 = document.createTextNode("Potatoes");
// li1.appendChild(liText1);
// li1.classList.add("item");

// const li2 = document.createElement("li");
// const liText2 = document.createTextNode("Mushrooms");
// li2.appendChild(liText2);
// li2.classList.add("item");

// const li3 = document.createElement("li");
// const liText3 = document.createTextNode("Garlic");
// li3.appendChild(liText3);
// li3.classList.add("item");

// const li4 = document.createElement("li");
// const liText4 = document.createTextNode("Tomatos");
// li4.appendChild(liText4);
// li4.classList.add("item");

// const li5 = document.createElement("li");
// const liText5 = document.createTextNode("Herbs");
// li5.appendChild(liText5);
// li5.classList.add("item");

// const li6 = document.createElement("li");
// const liText6 = document.createTextNode("Condiments");
// li6.appendChild(liText6);
// li6.classList.add("item");

// const listIngridientsRef = document.querySelector("#ingredients");
// listIngridientsRef.append(li1, li2, li3, li4, li5, li6);


// console.log(listIngridientsRef);

