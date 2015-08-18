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


		init : function() {
			console.log("online");
			app.main.carousel();
		}
	}

	jQuery(document).ready(function() {
		app.main.init();
	});
})(jQuery);