// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const newElement = ingredients.map((ingredient) => { 
const newElementLi = document.createElement("li");

newElementLi.classList.add("item");
newElementLi.textContent = ingredient;

return newElementLi;
})

ingredientsList.append(...newElement)
console.log(ingredientsList);
