$(document).ready(function() {
	var height = 600;
	var width = 900;
	var padding = 50;
	bubbleFrame = d3.select("#th-bubbles-wrapper")
	  								.append('svg')
	  								.attr('height', height)
	  								.attr('width', width)
	  								.attr('id', 'bubble-frame');

	d3.json('https://teamtreehouse.com/sarahwheeler.json', 
					function(error, json) {
    if (error) return console.warn(error);
    var data = {"points": []};
    for (var value in json.points) {
    	if (value !== "total" && value !== "Business" && value !== "Design") {
    		var point = json.points[value];
    		var subject = value;
    		data["points"].push({"subject": subject, "points": point});
    	}
    }
    bubbles = bubbleFrame.selectAll('circle')
    											.data(data.points)
	  											.enter()
	  											.append('circle');
	  bubbles.attr('r', function(d) { return Math.abs(d.points)/35 })
	  				.attr('cx', function(d) {return Math.max(0 + padding, Math.random() * width - padding)})
          	.attr('cy', function(d) {return Math.max(0 + padding, Math.random() * height - padding)})
	  				.attr('fill', '#15B89A')
	  				.attr('stroke', '#000');
	  var text = bubbleFrame.selectAll("text")
                        .data(data.points)
                        .enter()
                        .append("text");
    var textLabels = text
                 .attr("x", function(d) { return d.cx; })
                 .attr("y", function(d) { return d.cy; })
                 .text( function (d) { return ; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")                 
                 .attr("fill", "purple");
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