$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(document).ready(function () {

	$('a').each(function () {
    	$(this).removeClass('active');
	})
    $(".menu .btn-active").eq(0).addClass('active');

    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.menu-center-a a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

});

function onScroll(event){   
    $('.menu-center a.btn-active').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.isInViewport()) {
        	$(this).removeClass("active");
             currLink.addClass("active");
        }
        else{
             currLink.removeClass("active");
        }
    });
}

$( document ).ready(function() {


	//browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300, 
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced 
	offsetOpacity = 1200,
	//duration of the top scrolling animation (in ms)
	scrollDuration = 700;


	$( ".btn-menu" ).click(function() {
	  $( ".menu" ).toggleClass( "block" );
	});

	$( ".close-menu" ).click(function() {
	  $( ".menu" ).toggleClass( "block" );
	});

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top + 2
	        }, 2500, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

	  $( "#myBtn" ).click(function(event) {
	  event.preventDefault();
	  topFunction();

	});
	

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.documentElement.scrollTop > 350 || document.documentElement.scrollTop > 350) {
	       	$("#myBtn").addClass("fadeIn block");
	       	$("#myBtn").removeClass("fadeOut");
	    } else {
	       	$("#myBtn").removeClass("fadeIn");
	       	$("#myBtn").addClass("fadeOut").delay( 1000 ).removeClass("block");
	    }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	    document.body.scrollTop = 0; // For Safari
	    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}


	$(function(){
	  $('.submenu-hover').hover(function() {
	  	$(this).find('.btn-patio').addClass('border-bottom')
	    $(this).parent().find('.submenu').addClass('fadeIn block');

	  }, function() {
	    $(this).parent().find('.submenu').removeClass('fadeIn block');
	    $(this).find('a').removeClass('border-bottom')
	  })
	})

});