function initialize() {
  var losAngeles = new google.maps.LatLng(34.0500, -118.2500);
  var pasadena = new google.maps.LatLng(34.14778, -118.14452);
  var mapOptions = {
    zoom: 10,
    center: losAngeles,
    disableDefaultUI: true,
    mapTypeControlOptions: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);