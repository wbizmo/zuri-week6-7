$(document).ready(function () {
  var mySwiper = new Swiper(".swiper-container", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    loopedSlides: 50,
    centeredSlides: true,
    loop: true,
    watchSlidesVisibility: true,
    speed: 1000,
    navigation: {
      nextEl: ".next-image",
      prevEl: ".previous-image"
    }
  });
  mySwiper.init();
});