$(document).ready(function(){

  // sticky
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 600) {
      $(".sticky").removeClass("scroll-header");
    }else{
      $(".sticky").addClass("scroll-header");
    }
  });
  
  // Mixitup
  var mixer = mixitup(".portfolio");

  // Mobile Menu
  $('#mobile-menu').meanmenu({
      meanScreenWidth: "767",
      meanMenuContainer: '.mobile-menu'
  });

  new WOW().init();
    
  //ScrollUp
    // scroll Up
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    
    //video
    $('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });
  
});