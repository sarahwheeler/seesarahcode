$(document).ready(function() {

	$('.tech-link').on('click', function(event) {
		$('.container').html(function() {
			$('.about-tech').fadeToggle('slow');
			event.preventDefault();
		})
	});

	$('.personality-link').on('click', function(event) {
		$('.about-personality').fadeToggle('slow');
		event.preventDefault();
	});

	$('.care-link').on('click', function(event) {
		$('.about-care').fadeToggle('slow');
		event.preventDefault();
	});

	$('.edu-link').on('click', function(event) {
		$('.about-education').fadeToggle('slow');
		event.preventDefault();
	});

	$('.skills-link').on('click', function(event) {
		$('.about-skills').fadeToggle('slow');
		event.preventDefault();
	});

});