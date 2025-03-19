const ALL_TAB = document.querySelectorAll(".tab");
const ALL_TAB_CONTENT = document.querySelectorAll(".tab__content");

document.querySelectorAll(".tab").forEach((currentEl, index) => {
  currentEl.addEventListener("click", (e) => {
    for (let i = 0; i < ALL_TAB.length; i += 1) {
      ALL_TAB[i].classList.remove("tab_active");
      ALL_TAB_CONTENT[i].classList.remove("tab__content_active");
    }
    ALL_TAB[index].classList.add("tab_active");
    ALL_TAB_CONTENT[index].classList.add("tab__content_active");
  });
});
