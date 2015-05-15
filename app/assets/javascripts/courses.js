$(document).ready(function() {

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
    var allTheBadges = allBadges(data);
    allBadgeInsert(allTheBadges);
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

  function allBadges(data) {
    var icon_urls = [] // array [,] within array
    var allCourses = data.badges.sort(function(a, b) {
      a = new Date(a.earned_date);
      b = new Date(b.earned_date);
      return a>b ? -1 : a<b ? 1 : 0;
    });
    allCourses.forEach(function(badge) {
       icon_urls.push([badge.name, badge.icon_url, badge.url]);
    });
    return icon_urls;
  }

  function allBadgeInsert(badges) {
    badges.forEach(function(badge) {
      $('#th-badges ul.row').append("<li class='th-thumbnail col-lg-2 col-md-2 col-sm-3 col-xs-4'><img src='" + badge[1] + "' class='th-badge-img' alt='" + badge[0] + "'><div class='caption'><p>"+ badge[0] +"</p></div></li>");
    });
  }

  $.ajax({
  	type:  'GET',
  	url: 'courses/code_school',
  	data: {
  		format: 'json'
  	}
  }).success(function(data) {
  	var points = data["user"]["total_score"];
    $('#codeschool-pts').text(commaSeparatedNumber(points));
    var badge_total = data["badges"].length;
    $('#codeschool-bdgs').text(badge_total);
    var badges = csBadgeGrabber(data) // returns icon_urls
    csBadgeInserts(badges); //insert badge images & alt text
  });

  function csBadgeGrabber(profile) {
    var icon_urls = [] // array [,] within array
    var randomBadges = shuffle(profile.badges).slice(0,5);
    randomBadges.forEach(function(badge) {
       icon_urls.push([badge.name, badge.badge, badge.course_url]);
    });
    return icon_urls;
  }

  function csBadgeInserts(badges) {
    badges.forEach(function(badge) {
      var n = badges.indexOf(badge) + 1;
      $('#cs-badge' + n).html("<a href='" + badge[2] + "' target='_blank'><img src='" + badge[1] + "' title='" + badge[0] + "' class='th-badge-icon'></a>");
    });
  }

  function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };

});