$(document).ready(function() {
  d3.json('https://teamtreehouse.com/sarahwheeler.json',  function(error, json) {
  if (error) return console.warn(error);
  var dataset = [];
  for (var value in json.points) {
    if (value !== "total" && value !== "Business") {
      var point = json.points[value];
      var sbjt = value;
      dataset.push({"subject": sbjt, "points": point});
    }
  }
  
  var width = 360;
  var height = 360;
  var radius = Math.min(width, height) / 2;

  var color = d3.scale.ordinal()
  .range(["#CC0066","#990033", "#8a4996", "#520052", "#000066", "#006699", "#3284AD", "#009999", "#009980", "#134B4E"]);

  var svg = d3.select('#th-donut-wrapper')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');

  var arc = d3.svg.arc()
    .outerRadius(radius)
    .innerRadius(radius-75);
  

  var pie = d3.layout.pie()
    .value(function(d) { return d.points; })
    .sort(null);

  var path = svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('stroke', "#f8f8f8")
    .attr('stroke-width', "2px")
    .attr('fill', function(d, i) { 
      return color(i);
    })
    .attr('opacity', '0.78');  

    path.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr("transform", function(d) { //set the label's origin to the center of the arc
        //we have to make sure to set these before calling arc.centroid
        d.outerRadius = radius + 50; // Set Outer Coordinate
        d.innerRadius = radius + 45; // Set Inner Coordinate
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr("text-anchor", "middle") //center the text on it's origin
      .style("fill", "#000")
      .style("font", "bold 10px Arial")
      .text(function(d, i) { return d.subject; });
  
  });
});