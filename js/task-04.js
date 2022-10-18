let counterValue = 0;
const countValueRef = document.querySelector("#value");
const btnIncr = document.querySelector(`[data-action = "increment"]`);
const btnDecr = document.querySelector(`[data-action = "decrement"]`);
btnIncr.addEventListener("click", () => {
  counterValue += 1;
  countValueRef.textContent = counterValue;
});
btnDecr.addEventListener("click", () => {
  counterValue -= 1;
  countValueRef.textContent = counterValue;
});
