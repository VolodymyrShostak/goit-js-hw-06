const inField = document.querySelector(`#name-input`);
const outField = document.querySelector(`#name-output`);

inField.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    outField.textContent = e.target.value;
  } else {
    outField.textContent = `Anonymous`;
  }
});
