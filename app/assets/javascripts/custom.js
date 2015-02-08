$(document).ready(function() {

	$('.tech-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-tech').fadeToggle('slow'));
	});

	$('.personality-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-personality').fadeToggle('slow'));
	});

	$('.care-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-care').fadeToggle('slow'));
	});

	$('.edu-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-education').fadeToggle('slow'));
	});

	$('.skills-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-skills').fadeToggle('slow'));
	});

	$('.fun-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-fun').fadeToggle('slow'));
	});

});