// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
//  знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
//  і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() 
// і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const ulCategoriesRef = document.querySelector("#categories");
console.log("Number of categories:", ulCategoriesRef.children.length);

const liElementsRef = document.querySelectorAll(".item");


liElementsRef.forEach((element) => {
    const mainText = element.children[0].textContent;
    console.log(`Category: ${mainText}`);

    const listChild = element.children[1];
    const ulChild = listChild.children.length;

    console.log(`Elements: ${ulChild}`);
  
});









// const someAnimalsRef = document.querySelectorAll("h2");
// someAnimalsRef.forEach((element) => {
//     console.log("Category: ", element.textContent);
//     console.log("Elements: ");
// })

// const elementsRef = ulCategoriesRef.querySelectorAll('.item>ul>li');








