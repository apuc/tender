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



    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function(){
    	if(animating) return false;
    	animating = true;

    	current_fs = $(this).parent();
    	next_fs = $(this).parent().next();

    	//activate next step on progressbar using the index of next_fs
    	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    	//show the next fieldset
    	next_fs.show();
    	//hide the current fieldset with style
    	current_fs.animate({opacity: 0}, {
    		step: function(now, mx) {
    			//as the opacity of current_fs reduces to 0 - stored in "now"
    			//1. scale current_fs down to 80%
    			scale = 1 - (1 - now) * 0.2;
    			//2. bring next_fs from the right(50%)
    			left = (now * 50)+"%";
    			//3. increase opacity of next_fs to 1 as it moves in
    			opacity = 1 - now;
    			current_fs.css({'transform': 'scale('+scale+')'});
    			next_fs.css({'left': left, 'opacity': opacity});
    		},
    		duration: 500,
    		complete: function(){
    			current_fs.hide();
    			animating = false;
    		},
    		//this comes from the custom easing plugin
    		easing: 'easeOutQuint'
    	});
    });

    $(".previous").click(function(){
    	if(animating) return false;
    	animating = true;

    	current_fs = $(this).parent();
    	previous_fs = $(this).parent().prev();

    	//de-activate current step on progressbar
    	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    	//show the previous fieldset
    	previous_fs.show();
    	//hide the current fieldset with style
    	current_fs.animate({opacity: 0}, {
    		step: function(now, mx) {
    			//as the opacity of current_fs reduces to 0 - stored in "now"
    			//1. scale previous_fs from 80% to 100%
    			scale = 0.8 + (1 - now) * 0.2;
    			//2. take current_fs to the right(50%) - from 0%
    			left = ((1-now) * 50)+"%";
    			//3. increase opacity of previous_fs to 1 as it moves in
    			opacity = 1 - now;
    			current_fs.css({'left': left});
    			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
    		},
    		duration: 500,
    		complete: function(){
    			current_fs.hide();
    			animating = false;
    		},
    		//this comes from the custom easing plugin
    		easing: 'easeOutQuint'
    	});
    });

    $(".submit").click(function(){
    	return false;
    })



    var carousel = $("#carousel").featureCarousel({
      // include options like this:
      // (use quotes only for string values, and no trailing comma after last option)
      // option: value,
      // option: value
    });

    $("#but_prev").click(function () {
      carousel.prev();
    });
    $("#but_pause").click(function () {
      carousel.pause();
    });
    $("#but_start").click(function () {
      carousel.start();
    });
    $("#but_next").click(function () {
      carousel.next();
    });
});
