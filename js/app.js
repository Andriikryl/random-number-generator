const number = document.querySelector(".js-");
const parameters = document.querySelector(".js-parameters");
const rangeInput = document.querySelector(".js-range-input");
const minNumber = document.querySelector(".js-min-number");
const maxNumber = document.querySelector(".js-max-number");
const listInput = document.querySelector(".js-list-input");
const listNumbers = document.querySelector(".js-list-numbers");
const btn = document.querySelector(".js-btn");

parameters.addEventListener("change", () => {
  if (listInput.checked) {
    listNumbers.style.opacity = "1";
  } else {
    listNumbers.style.opacity = "0";
  }
});

listNumbers.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^\s\d]/g, "");
});

listNumbers.addEventListener("click", (e) => {});
