/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	// Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 74),

          }, 1000);
        return false;
      }
    }
  });



  /* ========================================================================= */
  /*  Fix Slider Height
  /* ========================================================================= */

  var slideHeight = $(window).height();

  $('sl-inner .item').css('height',slideHeight);

  $(window).resize(function(){'use strict',
    $('sl-inner .item').css('height',slideHeight);
  });

	 /* ========================================================================= */
  /*  Navigation background on scroll
  /* ========================================================================= */
      $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
          $("#navigation").css("background-color", "#264d67");
        }else{
          $("#navigation").css("background-color", "transparent");
        }
      });


	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */


    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

});
