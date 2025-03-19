const PARENT_ELEMENT = document.querySelector(".book__control");
const ARR_CHILDREN_ELEMENTS = [
  ...document.querySelector(".book__control").children,
];

PARENT_ELEMENT.addEventListener("click", (e) => {
  e.preventDefault();

  const BOOK_ELEMENT = document.getElementById("book");

  const USER_CHOOSE_SMALL_FONT =
    e.target.classList.value.includes("font-size_small");

  const USER_CHOOSE_BIG_FONT =
    e.target.classList.value.includes("font-size_big");

  ARR_CHILDREN_ELEMENTS.forEach((element) => {
    element.classList.remove("font-size_active");
  });

  e.target.classList.add("font-size_active");

  if (USER_CHOOSE_SMALL_FONT) {
    BOOK_ELEMENT.classList.remove("font-size_big");
    BOOK_ELEMENT.classList.add("font-size_small");
  } else if (USER_CHOOSE_BIG_FONT) {
    BOOK_ELEMENT.classList.remove("font-size_small");
    BOOK_ELEMENT.classList.add("font-size_big");
  } else {
    BOOK_ELEMENT.classList.remove("font-size_small");
    BOOK_ELEMENT.classList.remove("font-size_big");
  }
});
