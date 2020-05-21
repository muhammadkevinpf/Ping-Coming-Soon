const btnNotify = document.querySelector("#btnNotify");
const inputMail = document.querySelector("#inputMail");
const error = document.querySelector("#error");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btnNotify.addEventListener("click", () => {
  let inputValue = inputMail.value;
  let validateEmail = regexEmail.test(inputValue);
  if (inputValue.length === 0 || !validateEmail) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});
