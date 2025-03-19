// function isVisiable(el) {
//   const { top, bottom } = el.getBoundingClientRect();

//   if (bottom < 0) {
//     el.classList.remove("reveal_active");
//     return false;
//   }
//   if (top > window.innerHeight) {
//     el.classList.remove("reveal_active");
//     return false;
//   }

//   el.classList.add("reveal_active");
//   return true;
// }

// setInterval(() => {
//   for (let i = 0; i < document.querySelectorAll(".reveal").length; i += 1) {
//     isVisiable(document.querySelectorAll(".reveal")[i]);
//   }
// }, 1000);

const reveals = document.getElementsByClassName("reveal");

document.addEventListener('scroll', function() {
  for (let reveal of reveals) {
    const { innerHeight } = window;
		const { top } = reveal.getBoundingClientRect();
    if (top < innerHeight && top > 0) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  } 
});