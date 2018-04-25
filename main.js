$(window).load(function(e){
	$('.loader').fadeOut();
	$('.loader-img').fadeOut();
	$('.loader-wrapper').delay(500).fadeOut('slow');
	$(".anim-1").addClass("animated fadeInDown delayp8");
	$(".anim-2").addClass("animated fadeInUp delayp9");
	$(".anim-3").addClass("animated fadeInUp delayp10");
	$(".anim-4").addClass("animated fadeInUp delayp11");
	$(".anim-5").addClass("animated fadeIn delayp20");
});

$(document).ready(function() {

	$(function() {
	    $('body').on('click', '.page-scroll a', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});

	$(window).scroll(function() {

	    if ($(this).scrollTop() > 200) {
	       $('.navbar-brand').css('opacity', 1);
	       $('.invo').removeClass('infinite');
	    } else {
	    	$('.navbar-brand').css('opacity', 0);
		}
	});
	
	$(function() {
		$("img.lazy").lazyload({
			effect : "fadeIn"
		});
	});
	

	$(function() {
	    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
	        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
	    }).on("focus", ".floating-label-form-group", function() {
	        $(this).addClass("floating-label-form-group-with-focus");
	    }).on("blur", ".floating-label-form-group", function() {
	        $(this).removeClass("floating-label-form-group-with-focus");
	    });
	});

	$('body').scrollspy({
	  target: '#navbar-collapsible',
	  offset: 22
	});
	
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});

	$('.navbar-brand, .navbar-nav a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(2) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top - 20
		        }, 800);
		        
		        if (this.hash=="#home") {
		            $('.hinge').hide();
		        }
		        else {
		            $('.hinge').show();
		        }
		        
		        target.find('.animate').delay(1200).addClass("animated");
		        setTimeout(function(){
		            target.find('.animated').removeClass("animated");
		        },500);
		        
		        return false;
		      }
		    }
		});


	// swipe buat di mobile
		$(function() {
			$('#myCarousel').carousel({
      			interval: false
    		});
			$("#myCarousel").swiperight(function() {  
			  $("#myCarousel").carousel('prev');  
			});  
			$("#myCarousel").swipeleft(function() {  
			  $("#myCarousel").carousel('next');  
			});
		});
	// end swipe

});

// Trigger animation on scroll based on viewport
$(document).ready(function() {
  $('.vp-fadeinleft').viewportChecker({
      classToAdd: 'visible animated fadeInLeft',
      offset: 100
  });   
  $('.vp-fadeinright').viewportChecker({
      classToAdd: 'visible animated fadeInRight',
      offset: 100
  });  
  $('.vp-fadein').viewportChecker({
      classToAdd: 'visible animated fadeIn',
      offset: 100
  });
  $('.vp-fadeindown').viewportChecker({
      classToAdd: 'visible animated fadeInDown',
      offset: 100
  });
  $('.vp-fadeinup').viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 100
  });
  $('.vp-slideinup').viewportChecker({
    classToAdd: 'visible animated slideInUp',
    offset: 100
  });
  $('.vp-slideinright').viewportChecker({
    classToAdd: 'visible animated slideInRight',
    offset: 100
  });
  $('.vp-slideindown').viewportChecker({
    classToAdd: 'visible animated slideInDown',
    offset: 100
  });
  $('.vp-slideinleft').viewportChecker({
    classToAdd: 'visible animated slideInLeft',
    offset: 100
  });
  $('.vp-zoomin').viewportChecker({
    classToAdd: 'visible animated zoomIn',
    offset: 100
  });
  $('.vp-zoomindown').viewportChecker({
    classToAdd: 'visible animated zoomInDown',
    offset: 100
  });  
  $('.vp-rotatein').viewportChecker({
    classToAdd: 'visible animated rotateIn',
    offset: 100
  });  
}); 