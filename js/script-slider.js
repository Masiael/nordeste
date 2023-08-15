$(document).ready(function() {
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.carousel-prev'),
    nextArrow: $('.carousel-next'),
    dots: false, 
    autoplay: true,
    autoplaySpeed: 2000
  });
});