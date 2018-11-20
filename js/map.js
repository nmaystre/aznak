/*
 * Google Map
 * */

var zoomDefault = 17,
	coord = {
		lat: 59.9868283,
		lng: 30.3183087
	};

window.initMap = function () {
	var pin = 'images/marker.png';

	if ($('#map')[0] != undefined) {
		window.gMap = new google.maps.Map($('#map')[0], {
			center: {
				lat: coord.lat,
				lng: coord.lng
			},
			zoom: zoomDefault,
			disableDefaultUI: false,
			scrollwheel: false,
			styles: [
					{
						"featureType": "all",
						"elementType": "all",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"gamma": 1
							}
						]
					}
				]
		});

		var marker = new google.maps.Marker({
			position: {
				lat: coord.lat,
				lng: coord.lng
			},
			icon: {
				url:pin
			},
			map: window.gMap,
			title: 'Санкт-Петербург, Белоостровская ул. 20-25'
		});
	}

};