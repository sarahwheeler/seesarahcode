$(document).ready(function() {

	$('.tech-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append(function() {
			$('.about-tech').fadeToggle('slow');
			event.preventDefault();
		});

		//$('.container').html(function() {
		//	$('.about-tech').fadeToggle('slow');
		//	event.preventDefault();
		//})
	});

	$('.personality-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append(function() {
			$('.about-personality').fadeToggle('slow');
			event.preventDefault();
		});
		//$('.about-personality').fadeToggle('slow');
		//event.preventDefault();
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