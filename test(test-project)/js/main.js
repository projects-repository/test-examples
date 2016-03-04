// page init
jQuery(function(){
	initCarousel();
	initNav();
});

// touch-menu
function initNav() {
	var touch = $('.touch-menu');
	var menu = $('.nav');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
}

// scroll gallery init
function initCarousel() {
	jQuery('div.carousel').scrollGallery({
		mask: 'div.gmask',
		slider: '.slideset',
		slides: '.slide',
		currentNumber: 'span.cur-num',
		totalNumber: 'span.all-num',
		disableWhileAnimating: true,
		generatePagination: 'div.pagination',
		circularRotation: true,
		pauseOnHover: false,
		autoRotation: true,
		maskAutoSize: false,
		switchTime: 6000,
		animSpeed: 600,
		stretchSlideToMask: true,
		step: 1
	});
}
