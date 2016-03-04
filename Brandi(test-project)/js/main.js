// page init
jQuery(function(){
	initTabs();
	initCarousel();
	initNav();
	initMap();
});

function initMap() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		zoom: 17,
		center: {lat: 38.907248779744585, lng: -77.03653036616743},
		mapTypeId: google.maps.MapTypeId.ROADMAP, // тип карты ROADMAP, SATELLITE, HYBRID или TERRAIN
		//disableDefaultUI: true,
		// или
		draggable: true,
		scrollwheel: false,
		mapTypeControl: false,
		streetViewControl: false,
		panControl: false,
		zoomControl: false,
		scaleControl: false
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);

	map.set('styles',
		[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
	);

// Маркер
var marker = new google.maps.Marker({
	position: new google.maps.LatLng(38.907248779744585, -77.03653036616743),
	map: map,
	title: 'My workplace',
	clickable: true,
	icon: ("img/bg-marker.png"),
});

	// Construct a new InfoWindow.
	var infoWindow = new google.maps.InfoWindow({
		content: "Take an umbrella"
	});

	// Opens the InfoWindow when marker is clicked.
	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});
}

// touch-menu
function initNav() {
	var touch = $('.touch-menu');
	var menu = $('.nav');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
}

// content tabs init
function initTabs() {
	jQuery('ul.fade-tabset').contentTabs({
		autoHeight: true,
		animSpeed: 300,
		effect: 'fade',
		tabLinks: 'a',
		event: 'mouseenter'
	});
	jQuery('ul.slide-tabset').contentTabs({
		addToParent: true,
		animSpeed: 500,
		effect: 'slide',
		tabLinks: 'a'
	});
	jQuery('ul.multi-tabset').contentTabs({
		tabLinks: 'a'
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
		autoRotation: false,
		maskAutoSize: false,
		switchTime: 2000,
		animSpeed: 600,
		stretchSlideToMask: true,
		step: 1
	});
}
