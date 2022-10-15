const inField = document.querySelector(`input#font-size-control`);
let msgRef = document.querySelector(`#text`);
inField.addEventListener("input", (e) => {
  let letSize = e.currentTarget.value * 1.5;
  msgRef.style.fontSize = `${letSize}px`;
});
