let counterValue = 0;
const countValueRef = document.querySelector("#value");
const btnIncr = document.querySelector(`[data-action = "increment"]`);
const btnDecr = document.querySelector(`[data-action = "decrement"]`);
btnIncr.addEventListener("click", () => {
  countValueRef.textContent = counterValue += 1;
});
btnDecr.addEventListener("click", () => {
  countValueRef.textContent = counterValue -= 1;
});
