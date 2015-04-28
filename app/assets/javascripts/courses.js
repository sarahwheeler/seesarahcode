$.ajax({
  type: 'GET',
  url: 'http://teamtreehouse.com/sarahwheeler.json',
  data: {
    format: 'json'
  }
}).success(function(data) {
  var points = data["points"]["total"];
  console.log(points);
  $('#treehouse-pts').text(commaSeparatedNumber(points));
  $('#treehouse-bdgs').text(data.badges.length);
  var badges = badgeGrabber(data) // returns icon_urls
  console.log("BADGEGRABBER RETURNS:" + badges);
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
	var lastFive = profile.badges.sort(function(a, b) {
    a = new Date(a.earned_date);
    b = new Date(b.earned_date);
    return a>b ? -1 : a<b ? 1 : 0;
	}).slice(0,5);
	console.log(lastFive);
	lastFive.forEach(function(badge) {
		 icon_urls.push([badge.name, badge.icon_url]);
	});
	console.log(icon_urls);
	return icon_urls;
}

function badgeInserts(badges) {
	badges.forEach(function(badge) {
		switch (badges.indexOf(badge)) {
			case 0:
				$('#badge1').html("<img src='" + badge[1] + "' title='" + badge[0] + "' class='th-badge-icon'>");
				break;
			case 1: 
				$('#badge2').html("<img src='" + badge[1] + "' title='" + badge[0] + "' class='th-badge-icon'>");
				break;
			case 2: 
				$('#badge3').html("<img src='" + badge[1] + "' title='" + badge[0] + "' class='th-badge-icon'>");
				break;
			case 3: 
				$('#badge4').html("<img src='" + badge[1] + "' title='" + badge[0] + "' class='th-badge-icon'>");
				break;
			case 4: 
				$('#badge5').html("<img src='" + badge[1] + "' title='" + badge[0] + "' class='th-badge-icon'>");
				break;
			default: 
				return ""
		}
	});
}

$.ajax({
	type:  'GET',
	url: 'http://www.codeschool.com/users/272796.json',
	data: {
		format: 'json'
	}
}).success(function(data) {
	var points = data["user"]["total_score"];
  console.log(points);
  $('#codeschool-pts').text(commaSeparatedNumber(points));
});