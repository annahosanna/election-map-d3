window.onload = function() {
  var width = 960;
  var height = 500;
  var center;

  var projection = d3.geo.albersUsa()
  .scale(1070)
  .translate([width / 2, height / 2]);

  var path = d3.geo.path()
  .projection(projection);

  var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

  svg.append("rect")
  .attr("class", "background")
  .attr("width", width)
  .attr("height", height)
  .on("click", clicked);

  var g = svg.append("g");

  d3.json("us.json", function(error, us) {
    if (error) throw error;

    g.append("g")
    .attr("id", "states")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter().append("path")
    .attr("d", path)
    .on("click", clicked);

    g.append("path")
    .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
    .attr("id", "state-borders")
    .attr("d", path);
  });

  var clicked = function(polygon) {
    var x, y, zoom;
    zoom = 1;
    if (polygon && center !== polygon) {
      var centroid = path.centroid(polygon);
      x = centroid[0];
      y = centroid[1];
      center = polygon;
    } else {
      x = width / 2;
      y = height / 2;
      center = null;
    }

    g.selectAll("path")
    .classed("active", center && function(polygon) { return polygon === center; });

    g.transition()
    .duration(750)
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + zoom + ")translate(" + -x + "," + -y + ")")
    .style("stroke-width", 1.5 / zoom + "px");
  }
}