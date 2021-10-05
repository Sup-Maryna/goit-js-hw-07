const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");

function createGallery() {
  const createImageList = (array) =>
    array
      .map(({ url, alt }) => {
        return `<li><img src = '${url}' alt = '${alt}' class='gallery-item'></li>`;
      })
      .join("");
  gallery.insertAdjacentHTML("beforeend", createImageList(images));
  gallery.classList.add("gallery");
  gallery.setAttribute("style", "list-style-type:none;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:0;");
}

createGallery(images);