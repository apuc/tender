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


});
