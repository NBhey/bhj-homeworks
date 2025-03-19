const ARR_CHILDREN_ELEMENTS = [...document.querySelector(".rotator").children];

ARR_CHILDREN_ELEMENTS[0].style.color =
  ARR_CHILDREN_ELEMENTS[0].getAttribute("data-color");

let currentElement = 1;

setInterval(() => {
  if (currentElement == 6) {
    currentElement = 0;
  }
  ARR_CHILDREN_ELEMENTS.map((el) => {
    el.classList.remove("rotator__case_active");
  });
  ARR_CHILDREN_ELEMENTS[currentElement].classList.add("rotator__case_active");
  ARR_CHILDREN_ELEMENTS[currentElement].style.color =
    ARR_CHILDREN_ELEMENTS[currentElement].getAttribute("data-color");
  currentElement += 1;
}, 1000);
