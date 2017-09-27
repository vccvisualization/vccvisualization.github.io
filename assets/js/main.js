var target = window.location.hash,
    target = target.replace('#', '');
if (target) {               // do the test straight away
	window.scrollTo(0, 0);         // execute it straight away
	setTimeout(function() {
		window.scrollTo(0, 0);     // run it a bit later also for browser compatibility
	}, 1);
}
	
(function($) {
	skel
		.breakpoints({
			desktop: '(min-width: 970px)',
			tablet: '(min-width: 970px) and (max-width: 1200px)',
			mobile: '(max-width: 969px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	function lazyLoadImages() {
		[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
			img.setAttribute('src', img.getAttribute('data-src'));
			img.onload = function() {
				img.removeAttribute('data-src');
			};
		});	
	}	
	
	$(function() {
		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly.
    		$window.on('load', function() {				
                $body.removeClass('is-loading');
				var x = parseInt($('.wrapper').first().css('padding-top'));

				$('#nav a, .scrolly').scrolly({
					speed: 1000,
					offset: x
				});
				
				//initialize slick carousel
				$('#carousel').slick({
					autoplay: true,
					pausOnHover: true,
					arrows: false,
					dots: true,
					infinite: true,
					speed: 500,
					fade: true,
					cssEase: 'linear'
				});
				console.log( "Thank you for your continued interest :) Why don't you drop us a line?" );
				
				lazyLoadImages();

				if ( target ) {	
					$( 'html, body' ).stop().animate( {
						scrollTop: $("#" + target).offset().top - x
					}, 1000 );
				}
			});
	});
})( jQuery );
