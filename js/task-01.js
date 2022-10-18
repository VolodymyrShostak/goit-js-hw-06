const categories = document.querySelectorAll(`.item`);

console.log("Number of categories:", categories.length);
console.log("");
for (const li of Array.from(categories)) {
  console.log("Category: ", li.firstElementChild.textContent);
  console.log("Elements: ", li.lastElementChild.children.length);
  console.log("");
}
