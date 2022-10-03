$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 4,
  dots: false,
  arrows: true,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  prevArrow: "<div class='right-arrow'><img src='img/icons/right-arrow.svg' alt='' /></div>",
  nextArrow: "<div class='left-arrow'><img src='img/icons/left-arrow.svg' alt='' /></div>",
  responsive: [
    {
      breakpoint: 660,
      settings: 'unslick'
    }
  ]
  });
})


// $(window).resize(function(){
//   const windowSize = $window.width();
//   if (windowSize <= 660) {
//     $('.gallery').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: true
//     });
//   }
//   });

$('.gallery').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: 'unslick'
    },
    {
      breakpoint: 1200,
      settings: 'unslick'
    },
  ]
});