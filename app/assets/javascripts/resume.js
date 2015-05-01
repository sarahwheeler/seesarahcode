$(document).ready(function() {

	$('.bk-circle').on('click', function(event) {
		$('div.bk-circle').removeClass('active');
		$(this).addClass('active');
		if ($(this).hasClass('.bk1')) {
			$('.book-img').empty();
			$('.book-img').append("<img src='assets/recently_read/cravens_building_apps_ember.jpg' title='Building Web Apps with Ember.js by Jesse Cravens & Thomas Brady'>");
		} else if ($(this).hasClass('.bk2')) {
			$('.book-img').empty();
			$('.book-img').append("<img src='assets/recently_read/mcfarland_jj_missing_manual.jpeg' title=''>");
		} else if ($(this).hasClass('.bk3')===true) {
			$('.book-img').empty();
			$('.book-img').append("<img src='assets/recently_read/fernandez_rails4_way.jpg' title=''>");
		}
	});

});