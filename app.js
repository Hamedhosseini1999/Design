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

let SuggesttionsSlider = new Swiper(".mySuggestion", {
  slidesPerView: 4,
  initialSlide: 2,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
});

let minImage = new Swiper(".min-image", {
  slidesPerView: 7,
  initialSlide: 2,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
});
