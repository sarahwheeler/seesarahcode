$(document).ready(function() {
	var height = 500;
	var width = 800;
	var padding = 50;
	bubbleFrame = d3.select("#th-bubbles-wrapper")
	  								.append('svg')
	  								.attr('height', height)
	  								.attr('width', width)
	  								.attr('id', 'bubble-frame');

	d3.json('https://teamtreehouse.com/sarahwheeler.json', 
					function(error, json) {
    if (error) return console.warn(error);
    data = json;
    var points = [];
    points.push(data.points);
    for (var value in points) {
    	var point_total = points[value];
    	bubbles = bubbleFrame.selectAll('circle')
    											.data(point_total)
	  											.enter()
	  											.append('circle');
	  	bubbles.attr('r', function(d) { return Math.abs(d)/65 })
	  				.attr('cx', function(d) {return Math.max(0 + padding, Math.random() * width - padding)})
          	.attr('cy', function(d) {return Math.max(0 + padding, Math.random() * height - padding)})
	  				.attr('fill', '#000')
    }
  });
});

//	  	for (var value in d.points) { // value is the language
//	  		return d.points[value] // returns the points
//	  	}

// This works for one circle: 
//points.push(data.points);
//    bubbles = bubbleFrame.selectAll('circle')
//    											.data(points)
//	  											.enter()
//	  											.append('circle');
//	  bubbles.attr('r', function(d) { return Math.abs(d.total)/95 })
//	  				.attr('cy', 200)
//	  				.attr('cx', 200)
//	  				.attr('fill', '#000')