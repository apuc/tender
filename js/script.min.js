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

// open circle-loader //

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

// close circle-loader //

// open mobile-tab //

    $('.page__tabs_target').click(function(event) {
      $('.page__tabs_target').removeClass('page__tabs_active');
      $(this).addClass('page__tabs_active');
      event.preventDefault();
      var target = ($(this).data('tab'));

      $('.page__tabcontent').hide();
      $("."+ target).show();
    });

// close mobile-tab //    

// open map //
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(55.7693135, 37.5948613), // New York
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);

    }
// close map //


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
    		duration: 800,
    		complete: function(){
    			current_fs.hide();
    			animating = false;
    		},
    		//this comes from the custom easing plugin
    		easing: 'easeInOutBack'
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
    		duration: 800,
    		complete: function(){
    			current_fs.hide();
    			animating = false;
    		},
    		//this comes from the custom easing plugin
    		easing: 'easeInOutBack'
    	});
    });

    $(".submit").click(function(){
    	return false;
    })

/////////////////////////////

    $('.center').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '160px',
        dots: false,
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        responsive: [
        {
          breakpoint: 736,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
      ]
    });


    $('.slick-prev').on('click',function(){
        console.log('slick-prev');
        if(currentPlayer)
        currentPlayer.pauseVideo();
    });

    $('.slick-next').on('click',function(){
        console.log('slick-next');
        if(currentPlayer)
            currentPlayer.pauseVideo();
    });
    /////////





// open modal-tab //

  $('.page__tabs_target').click(function() {
    var width =  $(window).width();
    console.log(width);
    if(width<=736) {
      var tab = $(this).data('tab');
      console.log(tab);
      var art = $('article.'+tab);
      $('.page__box').show();
      art.show();
      console.log(art);
    }
  });

// close modal-tab //

//Image-slider open //

//slideshow style interval
var autoSwap = setInterval( swap,3500);

//pause slideshow and reinstantiate on mouseout
$('ul, span').hover(
function () {
  clearInterval(autoSwap);
},
function () {
 autoSwap = setInterval( swap,3500);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.items').each(function(index) {
  items[index] = $(this).text();
});

//swap images function
function swap(action) {
var direction = action;

//moving carousel backwards
if(direction == 'counter-clockwise') {
  var leftitem = $('.left-pos').attr('id') - 1;
  if(leftitem == 0) {
    leftitem = itemCount;
  }

  $('.right-pos').removeClass('right-pos').addClass('back-pos');
  $('.main-pos').removeClass('main-pos').addClass('right-pos');
  $('.left-pos').removeClass('left-pos').addClass('main-pos');
  $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');

  startItem--;
  if(startItem < 1) {
    startItem = itemCount;
  }
}

// //moving carousel forward
// if(direction == 'clockwise' || direction == '' || direction == null ) {
//   function pos(positionvalue) {
//     if(positionvalue != 'leftposition') {
//       //increment image list id
//       position++;
//
//       //if final result is greater than image count, reset position.
//       if((startItem+position) > resetCount) {
//         position = 1-startItem;
//       }
//     }
//
//     //setting the left positioned item
//     if(positionvalue == 'leftposition') {
//       //left positioned image should always be one left than main positioned image.
//       position = startItem - 1;
//
//       //reset last image in list to left position if first image is in main position
//       if(position < 1) {
//         position = itemCount;
//       }
//     }
//
//     return position;
//   }
//
//  $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
//  $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
//  $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
//  $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');
//
//   startItem++;
//   position=0;
//   if(startItem > itemCount) {
//     startItem = 1;
//   }
// }
}
//next button click function
$('#next').click(function() {
swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function() {
if($(this).attr('class') == 'items left-pos') {
   swap('counter-clockwise');
}
else {
  swap('clockwise');
}
});
//Image-slider close//
});
$('.smoothScroll').click(function () {
  event.preventDefault();
  var href = $(this).attr('href');
  var target = $(href);
    if (target.length > 1){
      var top = target.offset().top;
    }

  $('html,body').animate({
  scrollTop: top
  }, 1000);
});
