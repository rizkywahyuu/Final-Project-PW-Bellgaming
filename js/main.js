/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	$('.news-ticker').marquee({
	    duration: 10000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

	// MODAL
	var modal = document.getElementById('modform');


        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
		}
		
	// magnific-popup
	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

})(jQuery);


