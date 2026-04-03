/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

 function showOTSearch()
{
  jQuery(".serach_outer").slideDown(700);
}
function closeOTSearch()
{
  jQuery(".serach_outer").slideUp(700);
}


jQuery(function($){
  "use strict";
  jQuery('.menu > ul').superfish({
    delay:       500,
    animation:   {opacity:'show',height:'show'},
    speed:       'fast'
  });
});

// MOBILE MENU

function civil_engineering_pro_openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function civil_engineering_pro_closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// THEME OWL SLIDERS

jQuery('document').ready(function(){
  var owl = jQuery('#slider .owl-carousel');
    owl.owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 5000,
    loop: true,
    dots:false,
    navText : ['<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
    nav:true,
    items:1,
    lazyLoad: true,
    nav:true,
  responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 200
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
});
});



jQuery('document').ready(function(){
  var owl = jQuery('#our_services .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 5000,
    loop: false,
    dots:false,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

jQuery('document').ready(function(){
  var owl = jQuery('#company .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:false,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

jQuery('document').ready(function(){
  var owl = jQuery('#testimonials .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: false,
    dots:false,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

jQuery('document').ready(function(){
  var owl = jQuery('#achievement .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots:false,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 4
      },
      1000: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

jQuery('document').ready(function(){
  var owl = jQuery('#our_experts .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 5000,
    loop: true,
    dots:false,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

jQuery('document').ready(function(){
  var owl = jQuery('#latest_news .owl-carousel');
    owl.owlCarousel({
    margin:20,
    nav: false,
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: false,
    dots:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

// SCROLL TOP

jQuery('document').ready(function(){
  jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() >= 50) {
      jQuery('#return-to-top').fadeIn(200);
    } else {
      jQuery('#return-to-top').fadeOut(200);
    }
  });
  jQuery('#return-to-top').click(function() {
    jQuery('body,html').animate({
      scrollTop : 0
    }, 2000);
  });

  jQuery('#counter .count').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
          duration: 8000,
          easing: 'swing',
          step: function (now) {
             jQuery(this).text(Math.ceil(now));
          }
      });
  });
});

// STICKY NAV BAR

window.onscroll = function() { myScrollNav() };

var navbar = document.getElementById("nav-box");
var sticky = navbar.offsetTop;
function myScrollNav() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("stickynavbar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("stickynavbar");
  }
}

// SITE LOADER

jQuery(window).load(function() {
  jQuery(".preloader").delay(2000).fadeOut("slow");
});


// SEARCH POPUP

$('.header-search-wrapper .search-main').click(function(){
    $('.search-form-main').toggleClass('active-search');
    $('.search-form-main .search-field').focus();
});

// //pop up video

// $('#videoLink').magnificPopup({
//   type:'inline',
//   midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
// })


// testimonials

jQuery('#testimonials .project-tabs ul li a').click(function()
  {
    jQuery('#testimonials .project-tabs ul li a').removeClass('active');
  });
