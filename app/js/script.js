$(document).ready(function () {
  	$(".mnu_toggle").click(function() {
  		$(".sandwich").toggleClass("active");
  	});

  	$(".mnu ul a").click(function() {
  		$(".mnu").fadeOut(600);
  		$(".sandwich").toggleClass("active");

  	}).append("<span>");

  	$(".mnu_toggle").click(function() {
  		if ($(".mnu").is(":visible")) {
  			$(".mnu").fadeOut(600);
  			$(".mnu li a").removeClass("fadeInUp animated");
  		} else {
  			$(".mnu").fadeIn(600);
  			$(".mnu li a").addClass("fadeInUp animated");
  		};
  	});

    $('.loader-1').ClassyLoader({
        width:110,
        height:110,
        percentage: 47,
        speed: 20,
        fontSize: '24px',
        diameter: 40,
        lineColor: '#26a340',
        remainingLineColor: 'rgba(200,200,200,0.4)',
        start: 'top',
    });
    $('.loader-2').ClassyLoader({
        width:110,
        height:110,
        percentage: 16,
        speed: 20,
        fontSize: '24px',
        diameter: 40,
        lineColor: '#26a340',
        remainingLineColor: 'rgba(200,200,200,0.4)',
        start: 'top',
    });
    $('.loader-3').ClassyLoader({
        width:110,
        height:110,
        percentage: 28,
        speed: 20,
        fontSize: '24px',
        diameter: 40,
        lineColor: '#26a340',
        remainingLineColor: 'rgba(200,200,200,0.4)',
        start: 'top',
    });
    $('.loader-4').ClassyLoader({
        width:110,
        height:110,
        percentage: 9,
        speed: 20,
        fontSize: '24px',
        diameter: 40,
        lineColor: '#26a340',
        remainingLineColor: 'rgba(200,200,200,0.4)',
        start: 'top',
    });

    $('.page__tabs_target').click(function(event) {
      $('.page__tabs_target').removeClass('page__tabs_active');
      $(this).addClass('page__tabs_active');
      event.preventDefault();
      var target = ($(this).data('tab'));

      $('.page__tabcontent').hide();
      $("."+ target).show();
    });

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(55.7693135, 37.5948613), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        // var marker = new google.maps.Marker({
        //     position: new google.maps.LatLng(55.7693135, 37.5948613),
        //     map: map,
        //     title: 'Snazzy!'
        // });
    }

});
