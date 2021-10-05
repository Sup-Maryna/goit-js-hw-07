const sizeControl = document.querySelector("input#font-size-control");
const text = document.querySelector("#text");

sizeControl.addEventListener("input", changeFontSize);

function changeFontSize() {
    text.style.fontSize = sizeControl.value + "px";
}