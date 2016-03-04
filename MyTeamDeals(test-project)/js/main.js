function initMap() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		zoom: 12,
		center: {lat: -33.8666, lng: 151.2058},
		mapTypeId: google.maps.MapTypeId.ROADMAP, // тип карты ROADMAP, SATELLITE, HYBRID или TERRAIN
		//disableDefaultUI: true,
		// или
		mapTypeControl: false,
		streetViewControl: false,
		panControl: false,
		zoomControl: false,
		scaleControl: false
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	// стилизируем карту. https://snazzymaps.com/
	map.set('styles',
		[{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]}]
			);

// Маркер
	var marker = new google.maps.Marker({
			map: map,
		// Define the place with a location, and a query string.
		place: {
				location: {lat: -33.866982, lng: 151.212320},
			query: 'Строка для определения'
		}
	});

	// Construct a new InfoWindow.
	var infoWindow = new google.maps.InfoWindow({
		content: 'hey you!I am here!!'
	});

	// Opens the InfoWindow when marker is clicked.
	marker.addListener('click', function() {
		infoWindow.open(map, marker);
	});
}


// Загружаем карту
google.maps.event.addDomListener(window, 'load', initMap);