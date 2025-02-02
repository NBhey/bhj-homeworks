const cookie = document.getElementById("cookie");
const counterClick = document.getElementById("clicker__counter");
let firstClick = +counterClick.textContent;
cookie.addEventListener("click", () => {
  counterClick.textContent = +counterClick.textContent + 1;
  cookie.width == 200 ? (cookie.width = 180) : (cookie.width = 200);
});
