const formRef = document.querySelector(`.login-form`);
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  if (
    e.currentTarget.elements.email.value &&
    e.currentTarget.elements.password.value
  ) {
    const mail = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const formData = {
      mail,
      password,
    };
    console.log(formData);
    formRef.reset();
  } else {
    alert` Всі поля повинні бути заповнені.`;
  }
}
