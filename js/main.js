(function ($) {
	"use strict";
  
	// Smooth Scrolling with Offset
	function smoothScroll() {
	  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
			&& location.hostname === this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top - 70 // Adjusted navbar height
			}, 1000, "easeInOutExpo");
			return false;
		  }
		}
	  });
	}
  
	// Navbar Scroll Behavior
	function navbarScrollEffect() {
	  var nav = $('nav');
	  var navHeight = nav.outerHeight();
  
	  $(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
		  nav.addClass('navbar-reduce');
		  nav.removeClass('navbar-trans');
		  $('.back-to-top').fadeIn('slow');
		} else {
		  nav.addClass('navbar-trans');
		  nav.removeClass('navbar-reduce');
		  $('.back-to-top').fadeOut('slow');
		}
	  });
	}
  
	// Typed.js Text Animation
	function initTypedAnimation() {
	  if ($('.text-slider').length) {
		var typed_strings = $('.text-slider-items').text();
		new Typed('.text-slider', {
		  strings: typed_strings.split(','),
		  typeSpeed: 80,
		  loop: true,
		  backDelay: 1500,
		  backSpeed: 50
		});
	  }
	}
  
	// Responsive Menu Toggle
	function responsiveMenuToggle() {
	  $('.navbar-toggler').on('click', function() {
		$(this).toggleClass('active');
		$('.navbar-collapse').toggleClass('show');
	  });
	}
  
	// Portfolio Filter (optional enhancement)
	function portfolioFilter() {
	  $('.portfolio-filter button').on('click', function() {
		var filterValue = $(this).attr('data-filter');
		$('.portfolio-row .col').hide();
		$(filterValue).fadeIn();
	  });
	}
  
	// Initialize Functions
	$(document).ready(function() {
	  smoothScroll();
	  navbarScrollEffect();
	  initTypedAnimation();
	  responsiveMenuToggle();
	  portfolioFilter();
  
	  // Back to Top Button
	  $('.back-to-top').on('click', function() {
		$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		return false;
	  });
	});
  
  })(jQuery);