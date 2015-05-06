$(document).ready(function() {

	$.ajax({
	  type: 'GET',
	  url: 'http://teamtreehouse.com/sarahwheeler.json',
	  data: {
	    format: 'json'
	  }
	}).success(function(data) {
	  var points_total = data["points"]["total"];
	  
	});

});