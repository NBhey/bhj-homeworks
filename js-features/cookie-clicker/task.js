const cookie = document.getElementById("cookie");
const counterClick = document.getElementById("clicker__counter");
let firstClick = +counterClick.textContent;


//Создаем элемент отслеживания клика
const speedClickElement = document.createElement('div')
speedClickElement.innerHTML = `Скорость клика: <span id="speed_clicker_counter">0</span>`
document.querySelector('.clicker img').insertAdjacentElement('beforebegin',speedClickElement)



cookie.addEventListener("click", () => {
  changeSpeedClickElement()
  counterClick.textContent = +counterClick.textContent + 1;
  cookie.width == 200 ? (cookie.width = 180) : (cookie.width = 200);
});


let lastClick = Date.now();

function changeSpeedClickElement(){
  let currentClick = Date.now()
  let diffClick = (currentClick - lastClick) / 1000;
  let speedClick = 1 / diffClick;
  lastClick = currentClick; 
  document.getElementById('speed_clicker_counter').textContent = speedClick.toFixed(2)
}