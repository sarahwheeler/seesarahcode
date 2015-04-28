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
  badgeImageInsert(badges); //insert badge images
  badgeAltInsert(badges); //insert badge alt text
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
	lastFive.forEach(function(badge) {
		 icon_urls << [badge.name, badge.icon_url]
	});
	return icon_urls;
}

function badgeImageInsert(badges) {

}

function badgeAltInsert(badges) {

}