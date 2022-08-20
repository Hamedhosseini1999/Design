const menu = document.querySelector(".nav-mobile");
const btnNav = document.getElementById("drop");
const dropDown = document.querySelector(".dropdown-container");
const bars = document.querySelectorAll(".hamburger");

// Drop Down
btnNav.addEventListener("click", (e) => {
  dropDown.classList.toggle("active");
});

bars.forEach((btn) => {
  btn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
