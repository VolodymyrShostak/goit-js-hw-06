const listWithId = document.querySelector("#categories");

console.log("Number of categories:", listWithId.childElementCount);
console.log("");
console.log("Category: ", listWithId.children[0].firstElementChild.textContent);
console.log(
  "Elements: ",
  listWithId.children[0].lastElementChild.childElementCount
);
console.log("");
console.log("Category: ", listWithId.children[1].firstElementChild.textContent);
console.log(
  "Elements: ",
  listWithId.children[1].lastElementChild.childElementCount
);
console.log("");
console.log("Category: ", listWithId.children[2].firstElementChild.textContent);
console.log(
  "Elements: ",
  listWithId.children[2].lastElementChild.childElementCount
);
