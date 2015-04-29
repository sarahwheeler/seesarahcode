

$.ajax({
  type: 'GET',
  url: 'http://teamtreehouse.com/sarahwheeler.json',
  data: {
    format: 'json'
  }
}).success(function(data) {
  var points = data["points"]["total"];
  $('#treehouse-pts').text(commaSeparatedNumber(points));
  $('#treehouse-bdgs').text(data.badges.length);
  var badges = badgeGrabber(data) // returns icon_urls
  badgeInserts(badges); //insert badge images & alt text
  // send data to language bubble chart
});

function commaSeparatedNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  return val;
}

function badgeGrabber(profile) {
	var icon_urls = [] // array [,] within array
	var recentCourses = profile.badges.sort(function(a, b) {
    a = new Date(a.earned_date);
    b = new Date(b.earned_date);
    return a>b ? -1 : a<b ? 1 : 0;
	}).slice(0,5);
	recentCourses.forEach(function(badge) {
		 icon_urls.push([badge.name, badge.icon_url, badge.url]);
	});
	return icon_urls;
}

function badgeInserts(badges) {
	badges.forEach(function(badge) {
		var n = badges.indexOf(badge) + 1;
		$('#badge' + n).html("<a href='" + badge[2] + "' target='_blank'><img src='" + badge[1] + "' title='" + badge[0] + "' class='th-badge-icon'></a>");
	});
}

$.ajax({
	type:  'GET',
	url: codeschool_json_path,
	data: {
		format: 'json'
	}
}).success(function(data) {
	var points = data["user"]["total_score"];
  console.log("POINTS:" + points);
  $('#codeschool-pts').text(commaSeparatedNumber(points));
});