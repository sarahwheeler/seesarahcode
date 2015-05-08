$(document).ready(function() {

	d3.json('https://teamtreehouse.com/sarahwheeler.json', function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    createTreehouseBubbles(data);
  });

	function createTreehouseBubbles(data) {
		var bubbleFrame = d3.select("#th-bubbles-wrapper")
	  								.append('svg')
	  								.attr('id', 'bubble-frame');

		bubbles = bubbleFrame.selectAll('circle')
	  											.data(data)
	  											.enter()
	  											.append('circle');
	  bubbles.attr('r', function(d) { return console.log(d) });
	}

});