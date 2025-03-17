const dropDownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list ");

document.querySelectorAll('.dropdown').forEach((e) => e.addEventListener("click", (e) => {
  e.preventDefault()
  e.currentTarget.querySelector('.dropdown__list').classList.toggle("dropdown__list_active")
}))



document.querySelectorAll('.dropdown__list').forEach((e) => e.addEventListener("click", (e) => {
  e.currentTarget.parentNode.querySelector('.dropdown__value').textContent = e.target.textContent.trim()
}))
