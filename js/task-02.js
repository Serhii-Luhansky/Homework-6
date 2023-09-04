const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newIngredientsList = document.querySelector("#ingredients");

const newElement = ingredients.map((element) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = element;
  return liElement;
});
newIngredientsList.append(...newElement);