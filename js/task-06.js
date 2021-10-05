const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", validateInput);

function validateInput() {
  const validInputLength = parseInt(inputLength);
    if (input.value.length === validInputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}