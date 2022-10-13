const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const arr = [];
for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  li.textContent = ingredients[i];
  li.classList.add("item");
  arr.push(li);
}

const ul = document.querySelector("ul");
ul.prepend(...arr);
