const heading = document.querySelector("h3");
heading.addEventListener("dblclick", () => {
  heading.style.fontStyle = "italic";
});
const image = document.querySelector("img");

// image.addEventListener("mouseover", () => {
//   image.src = "../../media/images/burj.jpg";
//   s;
// });

// image.addEventListener("mouseover", () => {
//   image.style.width = "400px";
// });
image.onmouseover = function () {
  image.src = "../../media/images/burj.jpg";
};
image.onmouseover = function () {
  image.style.width = "400px";
};
