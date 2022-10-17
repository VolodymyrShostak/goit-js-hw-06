function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(`.change-color`);
const nmbColor = document.querySelector(`.color`);
const body = document.querySelector(`body`);

btnChangeColor.addEventListener(`click`, changeColor);
function changeColor(e) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  body.style.backgroundColor = getRandomHexColor();
  nmbColor.textContent = getRandomHexColor();
}
