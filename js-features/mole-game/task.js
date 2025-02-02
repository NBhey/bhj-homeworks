const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const list = document.querySelector(".hole-game").children;


for (let i = 0; i < list.length; i += 1) {
  list[i].addEventListener("click", (e) => {
    e = e.target;
    e.className.includes("hole_has-mole") ? changeKillMole() : changeLostMole();
  });
}

function changeKillMole() {
  dead.textContent = +dead.textContent + 1;
  if (dead.textContent == 10) {
    alert("С победой, товарищ!");
    dead.textContent = 0;
    lost.textContent = 0;
  }
}

function changeLostMole() {
  lost.textContent = +lost.textContent + 1;
  if (lost.textContent == 5) {
    alert("Не расстраивайтесь, товарищ!");
    dead.textContent = 0;
    lost.textContent = 0;
  }
}
