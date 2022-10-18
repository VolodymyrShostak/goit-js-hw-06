function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(`.change-color`);
const nmbColor = document.querySelector(`.color`);
const body = document.querySelector(`body`);

btnChangeColor.addEventListener(`click`, changeColor);
function changeColor(e) {
  body.style.backgroundColor = getColor();
  nmbColor.textContent = getColor();
}
const getColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
