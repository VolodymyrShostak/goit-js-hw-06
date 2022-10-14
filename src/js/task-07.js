const inField = document.querySelector(`input#font-size-control`);
let msgRef = document.querySelector(`#text`);
console.log(inField);
inField.addEventListener("input", (e) => {
  let letSize = e.currentTarget.value;
  msgRef.style.fontSize = `${letSize}px`;
});
