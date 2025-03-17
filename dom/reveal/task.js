function isVisiable(el) {
  const { top, bottom } = el.getBoundingClientRect();

  if (bottom < 0) {
    el.classList.remove("reveal_active");
    return false;
  }
  if (top > window.innerHeight) {
    el.classList.remove("reveal_active");
    return false;
  }

  el.classList.add("reveal_active");
  return true;
}

setInterval(() => {
  for (let i = 0; i < document.querySelectorAll(".reveal").length; i += 1) {
    isVisiable(document.querySelectorAll(".reveal")[i]);
  }
}, 1000);
