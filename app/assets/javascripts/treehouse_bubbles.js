$(document).ready(function() {
	var height = 400;
	var width = 600;
	var padding = 50;
	var diameter = 600;
	
	svg = d3.select("#th-bubbles-wrapper")
	  								.append('svg')
	  								.attr('height', diameter)
	  								.attr('width', diameter)
	  								.attr('id', 'bubble-frame');

	bubble = d3.layout.pack()
						.size([diameter, diameter])
						.value(function(d) { return d.points })
						.padding(3);


	d3.json('https://teamtreehouse.com/sarahwheeler.json', 
					function(error, json) {
    if (error) return console.warn(error);
    var data = {"points": []};
    for (var value in json.points) {
    	if (value !== "total" && value !== "Business") {
    		var point = json.points[value];
    		var subject = value;
    		data["points"].push({"subject": subject, "points": point});
    	}
    }
    var nodes = bubble.nodes(data.points);

    bubbles = svg.selectAll('circle')
    											.data(data.points)
	  											.enter()
	  											.append('circle');
	  bubbles.attr('r', function(d) { return Math.abs(d.points)/35 })
	  .attr('cx', function(d) {return Math.max(0 + padding, Math.random() * width - padding)})
          	.attr('cy', function(d) {return Math.max(0 + padding, Math.random() * height - padding)})
	  				.attr('fill', '#15B89A')
	  				.attr('stroke', '#000')
	  				.attr('class', function(d) {return d.subject.toLowerCase();});

    bubbles.append("svg:text")
       .attr("text-anchor", "middle")
       .text(function(d) { return d.subject; })
       .attr("fill", "black");
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