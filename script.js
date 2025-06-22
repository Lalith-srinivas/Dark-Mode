const checkbox = document.querySelector(".theme-switch__checkbox");
const body = document.body;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
