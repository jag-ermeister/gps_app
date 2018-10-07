

function initApp() {
    var uluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});

    googleGeolocationApiStuff(map, marker);
    //html5GeolocationStuff(map, marker);   
}