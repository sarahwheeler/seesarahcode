$(document).ready(function() {

	$('.tech-link').on('click', function(e) {
		$('.about-tech').fadeToggle('slow');
		e.stopPropagation();
	});

	$('.personality-link').on('click', function(e) {
		$('.about-personality').fadeToggle('slow');
		e.stopPropagation();
	});

	$('.care-link').on('click', function(e) {
		$('.about-care').fadeToggle('slow');
		e.stopPropagation();
	});

	$('.edu-link').on('click', function(e) {
		$('.about-education').fadeToggle('slow');
		e.stopPropagation();
	});

	$('.skills-link').on('click', function(e) {
		$('.about-skills').fadeToggle('slow');
		e.stopPropagation();
	});

});