function html5GeolocationStuff(map, marker) {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported for this Browser/OS.');
        return;
    }

    var geoOptions = { timeout: 10 * 1000 };

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