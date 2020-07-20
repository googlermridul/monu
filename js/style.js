$(document).ready(function() {

   /*-- NAVIGRATION --*/
   $("#hamburger").click(function() {
      $(this).toggleClass("active");
   })

   $(".nav-link").click(function(){
      $(".navbar-collapse").collapse("hide");
      $("#hamburger").removeClass("active");
   });

   $(".nav-item > a").click(function() {
      $(".nav-item > a").removeClass("active");
      $(this).addClass("active");
   });

   $(window).scroll(function() {
      var st = $(this).scrollTop();
      if( st > 10 ) {
         $(".navbar").css({
            background: "rgba(255, 255, 255, .8)"
         });
         $(".collapse").css({
            background: "none"
         });
      } else {
         $(".navbar").css({
            background: "none"
         });
         $("#hamburger").click(function() {
            $(".navbar").css({
               background: "rgba(255, 255, 255, .8)"
            });
         })
      }
   });

   /*-- WORK SECTION COUNTERUP PLUGIN --*/
   $(".counter").counterUp({
      delay: 10,
      time: 2000
   });

   /*-- TESTIMONIAL SECTION CAROUSEL PLUGIN --*/
   $('#testimonialSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 33,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         }
      }
   });

   /*-- PARTNER SECTION CAROUSEL PLUGIN --*/
   $('#partnerSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 33,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:2
         },
         768: {
            items:3
         },
         992: {
            items:5
         }
      }
   });

   /*-- SCROLL UP --*/
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });


   AOS.init({
      duration: 1200
   });

})
