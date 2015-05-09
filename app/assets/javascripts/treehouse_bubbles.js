$(document).ready(function() {
	var height = 500;
	var width = 800;
	var padding = 50;
	bubbleFrame = d3.select("#th-bubbles-wrapper")
	  								.append('svg')
	  								.attr('height', height)
	  								.attr('width', width)
	  								.attr('id', 'bubble-frame');

	d3.json('https://teamtreehouse.com/sarahwheeler.json', function(error, json) {
    if (error) return console.warn(error);
    data = json;
    bubbles = bubbleFrame.selectAll('circle').data(data)
	  											.enter()
	  											.append('circle');
	  bubbles.attr('r', function(d) { return d })
	  				.attr('cy', 200)
	  				.attr('cx', 200)
	  				.attr('fill', '#000')
  });

	function createTreehouseBubbles(data) {
		bubbles = bubbleFrame.selectAll('circle').data(data)
	  											.enter()
	  											.append('circle');
	  bubbles.attr('r', function(d) { return d })
	  				.attr('cy', 200)
	  				.attr('cx', 200)
	  				.style('fill', '#000')
	}

});

//	  	for (var value in d.points) { // value is the language
//	  		return d.points[value] // returns the points
//	  	}