const all_li = document.querySelectorAll("li");
all_li.forEach((li) => {
  li.addEventListener("click", () => {
    li.style.color = "crimson";
  });
});
