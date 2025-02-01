const timer = document.getElementById("timer");
console.log(window.location);
let interval = setInterval(() => {
  timer.textContent -= 1;
  if (Number(timer.textContent) === 55) {
    clearInterval(interval);
    window.open('https://get.wallhere.com/photo/face-cat-nose-whiskers-skin-kitten-kid-fluffy-mammal-playful-vertebrate-close-up-cat-like-mammal-small-to-medium-sized-cats-carnivoran-domestic-short-haired-cat-700214.jpg','_blank')
    // let link = document.createElement("a");
    // link.href = "https://get.wallhere.com/photo/face-cat-nose-whiskers-skin-kitten-kid-fluffy-mammal-playful-vertebrate-close-up-cat-like-mammal-small-to-medium-sized-cats-carnivoran-domestic-short-haired-cat-700214.jpg"; 
    // link.target = "_blank"
    // link.download = "face-cat-nose-whiskers-skin-kitten-kid-fluffy-mammal-playful-vertebrate-close-up-cat-like-mammal-small-to-medium-sized-cats-carnivoran-domestic-short-haired-cat-700214"; 
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  }
}, 100);
