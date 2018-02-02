/*
=======================================
CUSTOM JS
=======================================
*/

// Preload body overlay effect
$(window).on('load', function () {
  $('body').addClass('is-loaded');
  $("nav.navbar").removeClass('hidden');
});

$(".navbar").hide();

$('.carousel').carousel();

$("a.scroller").smoothscrolling();

new WOW().init();

$(document).ready(function() {

  // sidr config
  $('#mobile-menu-toggle').sidr({
    "side": "right",
    "name": "sidr",
    onOpen: function onOpen() {
      // $('#mobile-menu-toggle').find('.icon').toggle();
      $('#mobile-menu-toggle').toggleClass('is-open');
      $('.wrapper').toggleClass('blur');
    },
    onClose: function onClose() {
      // $('#mobile-menu-toggle').find('.icon').toggle();
      $('#mobile-menu-toggle').toggleClass('is-open');
      $('.wrapper').toggleClass('blur');
    }
  });
  // Close Sidr menu after click link or click outside
  $(document).on('click','#sidr',function(e) {
    if( $(e.target).is('a') ) {
      $.sidr('close', 'sidr');
    }
  });
  $(document).bind("click", function () {
    $.sidr('close', 'sidr');
  });

  // Navbar hide and show scroll
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
  });

  // Scroll totop
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  $(".scrollToTop").click(function() {
    $("body,html").animate({scrollTop:0},800);
  });

});