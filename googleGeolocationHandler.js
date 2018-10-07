function googleGeolocationApiStuff(map, marker) {
    var geoSuccess = function(position) {
        document.getElementById('currentLat').innerHTML = position.location.lat;
        document.getElementById('currentLong').innerHTML = position.location.lng;

        map.setCenter(new google.maps.LatLng(position.location.lat, position.location.lng));
        marker.setPosition(new google.maps.LatLng(position.location.lat, position.location.lng));
    };

    jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=" + env.API_KEY, geoSuccess)
        .fail(function(err) {
            console.log(err);
            alert("API Geolocation error! \n\n" + JSON.stringify(err));
        });
}