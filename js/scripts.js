(function ($) {
	$(document).ready(function () {
		"use strict";
		// $("html, body").animate({ scrollTop: 0 }, "slow");
		// $(window).on('beforeunload', function() {
		// 	$(window).scrollTop(0);
		//   });

		

		
		$('#about-btn').on('click', function() {
			$('.navbar-toggler').toggleClass('collapsed');
			$('.navbar-collapse').toggleClass('show');
			$('.navbar-toggler').attr('aria-expanded', 'false');
		  });





		// PAGE TRANSITION
		// $('.navigation-menu ul li a').on('click', function (e) {
		// 	$('.transition-overlay').toggleClass("open");
		// });
		// $('.nav-link').on('click', function (e) {
		// 	e.preventDefault();
		// 	var goTo = this.getAttribute("href");
		// 	setTimeout(function () {
		// 		window.location = goTo;
		// 	}, 1000);
		// });


		/********************
		   Main image slider
		 *********************/
		$('.main-image-slider').slick({
			slidesToShow: 1,
			loop: true,
			autoplay: true,
			swipe: false,
			pauseOnHover: false,
			autoplaySpeed: 5000,
			arrows: false,
			autoplayButton: false,
			fade: true,
			speed: 1000,
			dots: false,
			instructionsText: 'This carousel shows one large product image at a time. Use the Previous and Next buttons to move between images, or use the preceding thumbnails carousel to select a specific image to display here.',
			regionLabel: 'main image carousel',
		});






















	});
	// END JQUERY		




























	

	$(function () {
		var header = $(".start-style");
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 50) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	





	// $(function() {
	// 	var header = $(".start-style");
	// 	var scrollPosition = localStorage.getItem("scrollPosition");

	// 	if (scrollPosition) {
	// 		$(window).scrollTop(parseInt(scrollPosition));
	// 		$(window).scroll(function() {
	// 			var scroll = $(window).scrollTop();

	// 			if (scroll >= 50) {
	// 				header.removeClass('start-style').addClass("scroll-on");
	// 				localStorage.setItem("scrollPosition", scroll.toString());
	// 			} else {
	// 				header.removeClass("scroll-on").addClass('start-style');
	// 				localStorage.removeItem("scrollPosition");
	// 			}
	// 		});
	// 	}
	// });










	setTimeout(function () {
		$("body").addClass("page-loaded");
	}, time);


	// WOW ANIMATION 
	var wow = new WOW(
		{
			animateClass: 'animated',
			offset: 50
		}
	);
	wow.init();










})(jQuery);











