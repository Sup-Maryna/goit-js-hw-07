const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
const container = document.querySelector("ul");

function setIngredientsList() {
 const listArray = ingredients.map((ingredient) => {
   const item = document.createElement("li");
   item.textContent = ingredient;
   return item;
 });
    container.append(...listArray);
}
setIngredientsList();