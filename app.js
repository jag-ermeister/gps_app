

function initApp() {
    var uluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});

    if (!navigator.geolocation) {
        alert('Geolocation is not supported for this Browser/OS.');
        return;
    }

    geoLocationStuff(map, marker);
}

function geoLocationStuff(map, marker) {
    var geoOptions = {
        timeout: 10 * 1000
    }

    var geoSuccess = function(position) {
        document.getElementById('currentLat').innerHTML = position.coords.latitude;
        document.getElementById('currentLong').innerHTML = position.coords.longitude;

        map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    };

    var geoError = function(error) {
        console.log('Error occurred. Error code: ' + error.code);
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    };

    navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
}