const inputField = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

inputField.addEventListener("input", setNameValue);

function setNameValue() {
    output.textContent = inputField.value;
    if (output.textContent === "") {
      output.textContent = "незнакомец";
    }
}