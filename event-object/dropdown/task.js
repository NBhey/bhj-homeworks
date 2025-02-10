const dropDownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list ");

dropDownValue.addEventListener("click", (e) => {
  dropdownList.classList.contains("dropdown__list_active")
    ? dropdownList.classList.remove("dropdown__list_active")
    : dropdownList.classList.add("dropdown__list_active");
});

dropdownList.addEventListener("click", (e) => {
  e.preventDefault();
  dropDownValue.textContent = e.target.textContent.trim();
});
