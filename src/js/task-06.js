const inField = document.querySelector(`[data-length="6"]`);
inField.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length == inField.getAttribute("data-length")) {
    inField.classList.add("valid");
  } else {
    inField.classList.add("invalid");
  }
});
