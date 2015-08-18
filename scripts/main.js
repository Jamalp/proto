var app = app || {};

(function($){
	app.main = {

		carousel : function() {
			$('.carousel').find('.inner').slick({
				dots: false,
				arrows: false,
				draggable : true,
				waitForAnimate: false,
				infinite: true,
				autoplaySpeed: 4000,
				centerMode: true
			});
		},

		fadeHero : function() {
			function fader() {
				  var r = $('.blurred'),
				    wh = $(window).height(),
				    dt = $(document).scrollTop(),
				    elView, opacity;

				  // Loop elements with class "blurred"
				  r.each(function() {
				    elView = wh - ($(this).offset().top - dt + 200);
				    if (elView > 0) { // Top of DIV above bottom of window.
				      opacity = 1 / (wh + $(this).height()) * elView * 2
				      if (opacity < 1) // Bottom of DIV below top of window.
				        $(this).css('opacity', opacity);
				    }
				  });
				}

				$(document).bind('scroll', fader);
		},


		init : function() {
			app.main.carousel();
			app.main.fadeHero();
		}
	}

	jQuery(document).ready(function() {
		app.main.init();
	});
})(jQuery);