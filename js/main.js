(function($) {
"use strict";
  // On Scroll Header Style One
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#header').addClass('fixed');
        } else {
        $('#header').removeClass('fixed');
      }
    });

    $('.navbar-nav .nav-link').click(function(){
      $('.navbar-nav .nav-link').removeClass('active');
      $(this).addClass('active');
    })
  // Responsive menu js
  $(document).ready(function(){
    var topSpace = $('.site-header').height() -2;
  });

  var siteToggle = $('.navbar-toggler'),

  layer=$('.site__layer'),
  siteMenu= $('.navbar-collapse');

  siteToggle.on('click', function(){
    layer.toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  });
  //wow js active
  new WOW().init();

  $('.site__layer, #navbarCollapse a').on('click', function(){
    layer.removeClass('active');
    siteToggle.addClass('collapsed');
    siteMenu.removeClass('show');
    $('body').removeClass('overflow-hidden');
  });

 


})(jQuery);