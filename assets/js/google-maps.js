function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 17.0194, lng: 54.1108};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Salalah, Oman' // Title Location
    });
}