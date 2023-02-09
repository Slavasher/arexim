const swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".arrow__img--right",
    prevEl: ".arrow__img--left",
  },
});
