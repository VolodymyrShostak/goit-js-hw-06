const categories = document.querySelectorAll(`.item`);

console.log("Number of categories:", categories.length);
console.log("");

for (const li of Array.from(categories)) {
  console.log("Category: ", li.firstElementChild.textContent);
  console.log("Elements: ", li.lastElementChild.children.length);
  console.log("");
}

//  for (i = 0; i<)
// console.log("Category: ", listWithId.children[0].firstElementChild.textContent);
// console.log(
//   "Elements: ",
//   listWithId.children[0].lastElementChild.childElementCount
// );
// console.log("");
// console.log("Category: ", listWithId.children[1].firstElementChild.textContent);
// console.log(
//   "Elements: ",
//   listWithId.children[1].lastElementChild.childElementCount
// );
// console.log("");
// console.log("Category: ", listWithId.children[2].firstElementChild.textContent);
// console.log(
//   "Elements: ",
//   listWithId.children[2].lastElementChild.childElementCount
// );
