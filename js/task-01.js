const categories = document.querySelectorAll("li.item");

function getNumberOfList() {
  console.log(`В списке ${categories.length} категории.`);
}
getNumberOfList();

function getNumberOfListItem() {
    categories.forEach((category) => {
        console.log(`Категория: ${category.querySelector("h2").textContent}`);
        console.log(`Количество элементов: ${category.querySelectorAll("li").length}`);
    });
}
getNumberOfListItem();