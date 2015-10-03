var dialhealth = {

    preLoader: function(){
        imageSources = []
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    smoothScroll: function() {
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    },

    testimonialsCarousel: function() {
        // testimonials Carousel
        $('.testimonial-filtering').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    },

    screensCarousel: function() {
        // Screens Carousel
        $('.filtering').slick({
            autoplay:true,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        

    },

    animateScript: function() {
        $('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});
        $('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});
        $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
        $('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});
        $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
    },

     scrollMenu: function(){
        var num = 50; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');

            } else {
                $('nav').removeClass('scrolled');
            }
        });
    },
    placeHold: function(){
        // run Placeholdem on all elements with placeholders
        Placeholdem(document.querySelectorAll('[placeholder]'));
    }

}; // dialhealth









$(document).ready(function() {

    dialhealth.smoothScroll();

    dialhealth.testimonialsCarousel();

    dialhealth.screensCarousel();

    dialhealth.animateScript();

   dialhealth.scrollMenu();

    dialhealth.placeHold();

    

});

//Back To Top Scripts
jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});

//Form Scripts
$(".nav a, .navbar-header a").click(function(event) {
                       // check if window is small enough so dropdown is created
                      jQuery(".navbar-collapse").removeClass("in").addClass("collapse");
               });
                $('.forget-form').hide();
               $('.register-form').hide();
               $('.activation-form').hide();
                $('#forget-password').click(function () {
               $('.login-form').hide();
               $('.forget-form').show();

               });
               
               $('#back-btn').click(function () {
               $('.login-form').show();
               $('.forget-form').hide();
               });
               $('#register-btn').click(function () {
               $('.login-form').hide();
               $(".modal-dialog").removeClass("modal-sm");
               $('.register-form').show();
               });
               
               $('#register-back-btn').click(function () {
               $('.login-form').show();
               $(".modal-dialog").addClass("modal-sm");
               $('.register-form').hide();
               });
               
               $('#activation').click(function () {
               $('.forget-form').hide();
               $('.activation-form').show();
               });

               //On esccape Keypress Modal Close

               $(document).keyup(function(e) { 
    if (e.keyCode == 27) { 
       
        $('#loginModal').modal('hide');
        $(this).data('modal', null);

    } 
});
               //Collapse Menu when clicking outside 
               $(document).on('click',function(){
   $('.collapse').collapse('hide');
})
var search_data_list = {
    city: ["Agra", "Aurangabad", "Bhopal", "Jamshedpur", "Jabalpur", "Pune" , "Bangalore"],
    doctor: ["Dr. Mehta", "Dr. Lisa", "Dr. Smita"],
	clinic: ["Bhangli", "Jagtap", "TMH", "Apollo", "Jhagir", "Ruby"]
};
$("body").on("click", "a[href*=#]", function(event) {
	event.preventDefault();
	if(this.hash.slice(1) == "by_locations"){
		by_locations();
	}

});

function by_locations(){
	initialize();
	var geocoder;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
	}
	$("#search_concept").text("Getting Location...");
	//Get the latitude and the longitude;
	function successFunction(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		codeLatLng(lat, lng);
	}

	function errorFunction() {
		alert("Geocoder failed");
	}

	function initialize() {
		geocoder = new google.maps.Geocoder();
	}

	function codeLatLng(lat, lng) {

		var latlng = new google.maps.LatLng(lat, lng);
		geocoder.geocode({
			'latLng': latlng
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				//console.log(results);
				if (results[1]) {
					var indice = 0;
					for (var j = 0; j < results.length; j++) {
						if (results[j].types[0] == 'locality') {
							indice = j;
							break;
						}
					}
					for (var i = 0; i < results[j].address_components.length; i++) {
						if (results[j].address_components[i].types[0] == "locality") {
							//this is the object you are looking for
							city = results[j].address_components[i];
						}
						if (results[j].address_components[i].types[0] == "administrative_area_level_1") {
							//this is the object you are looking for
							region = results[j].address_components[i];
						}
						if (results[j].address_components[i].types[0] == "country") {
							//this is the object you are looking for
							country = results[j].address_components[i];
						}
						$("#search_concept").html(city.long_name);
            $( "#search_special" ).val( " " );
            $( "#search_special" ).trigger( "focus" );
            $( "#search_special" ).trigger( "keyup" );
          }
				} else {
					alert("No results found");
				}
			} else {
				alert("Geocoder failed due to: " + status);
			}
		});
	}
}

$( "#search_special" ).focus(function(event) {
  $( "#search_special" ).val( " " ).trigger( "keyup" ).val( "" ).attr("placeholder","Specialities, Doctors, Clinics...");
});
$( "#search_special" ).blur(function(event) {
  var $txtVal = $( "#search_special" ).val();
  if( $( "#search_special" ).val() === "" ){
    console.log($txtVal);
    $( "#search_special" ).val( $txtVal );
  }
});




