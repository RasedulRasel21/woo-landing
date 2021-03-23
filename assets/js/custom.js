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

  //counter
  $(document).ready(function($) {
    //Check if an element was in a screen
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom));
    }
    //Count up code
    function countUp() {
        $('.counter').each(function() {
          var $this = $(this), // <- Don't touch this variable. It's pure magic.
              countTo = $this.attr('data-count');
              ended = $this.attr('ended');

        if ( ended != "true" && isScrolledIntoView($this) ) {
            $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 2500, //duration of counting
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        $this.attr('ended', 'true');
        }
        });
    }
    //Start animation on page-load
    if ( isScrolledIntoView(".counter") ) {
        countUp();
    }
    //Start animation on screen
    $(document).scroll(function() {
        if ( isScrolledIntoView(".counter") ) {
            countUp();
        }
    });


});

AOS.init({
  disable: function() {
    var maxWidth = 991;
    return window.innerWidth < maxWidth;
  }
});