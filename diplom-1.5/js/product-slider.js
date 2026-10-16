export const productSlider = () => {
  new Swiper(".reviews__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: '.reviews__slider-button--prev',
      nextEl: '.reviews__slider-button--next',
    }
  });
};
