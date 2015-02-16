$(document).ready(function() {

	$('.tech-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-tech').fadeToggle('slow'));
		event.preventDefault();
	});

	$('.personality-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-personality').fadeToggle('slow'));
		event.preventDefault();
	});

	$('.care-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-care').fadeToggle('slow'));
		event.preventDefault();
	});

	$('.edu-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-education').fadeToggle('slow'));
		event.preventDefault();
	});

	$('.skills-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-skills').fadeToggle('slow'));
		event.preventDefault();
	});

	$('.fun-link').on('click', function(event) {
		$('.container').empty();
		$('.container').append($('.about-fun').fadeToggle('slow'));
		event.preventDefault();
	});

	$('.circle').on('click', function(event) {
		$('div.circle').removeClass('active');
		$(this).addClass('active');
		$(".cultivate-img").slideToggle("slow");
		$('.cultivate-vid').slideToggle("slow");
	});

});