//responsive navbar
(function ($) {
    $(".header-menu-bar").on("click", function () {
      $("body").addClass("body-mobile-menu");
    });
    $(".header-mobile-close").on("click", function () {
      $("body").removeClass("body-mobile-menu");
    });
    $(".breadcrumb-nav-mobile h2").on("click", function () {
      $(".breadcrumb-nav-mobile ul").slideToggle();
    });
  })(jQuery);

  //AOS

  AOS.init();


AOS.init({
  disable: function() {
    var maxWidth = 991;
    return window.innerWidth < maxWidth;
  }
});


// carousel


$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 1,
  dots:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
  prevArrow: '<span class="prev-arrow"><img src="./assets/images/left.png" alt=""></span>',
  nextArrow: '<span class="next-arrow"><img src="./assets/images/right.png" alt=""></span>',
  });
});
