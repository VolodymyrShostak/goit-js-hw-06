const inRef = document.querySelector("input");
const crtRef = document.querySelector("[data-create]");
const destRef = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

inRef.addEventListener("input", (e) => {
  const amount = e.currentTarget.value;

  crtRef.addEventListener("click", (e) => {
    let size = 30;
    for (let i = 0; i <= amount - 1; i++) {
      let div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      boxes.append(div);
      size += 10;
      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }
    }
  });
});
destRef.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}
