var swiper = new Swiper(".cards-videos", {
  slidesPerView: 2.5,
  spaceBetween: 54,
  pagination: {
    el: ".s-depoimentos .top .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 56,
    },
    767: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 54,
    },
  },
})
