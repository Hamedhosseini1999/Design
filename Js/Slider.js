let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// Services

const next = document.querySelector(".right");

let setServices = new Swiper(".service-container", {
  breakpoints: {
    350: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  loop: true,
  navigation: {
    nextEl: ".left",
    prevEl: ".right",
  },
});

let SuggesttionsSlider = new Swiper(".mySuggestion", {
  breakpoints: {
    550: { slidesPerView: 2 },
    800: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
  slidesPerView: 1,
  initialSlide: 2,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
});

let minImage = new Swiper(".min-image", {
  breakpoints: {
    530: { slidesPerView: 3 },
    800: { slidesPerView: 4 },
    1100: { slidesPerView: 6 },
    1350: { slidesPerView: 7 },
  },
  slidesPerView: 2,
  initialSlide: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
});
