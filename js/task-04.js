const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");
let currentValue = 0;

decrementBtn.addEventListener("click", decrementOnClick);
incrementBtn.addEventListener("click", incrementOnClick);

function decrementOnClick() {
  currentValue--;
  value.textContent = currentValue;
}

function incrementOnClick() {
  currentValue++;
  value.textContent = currentValue;
}