const createPath = (projection) => {
  return d3.geo.path().projection(projection);
}

const createProjection = (width, height) => {
  return d3.geo.albersUsa().translate([width/2, height/2]).scale([900]);
}

const createSVG = (width, height) => {
  return d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
}

const addData = (svg, path) => {
  d3.json("us-states.json", function(json) {
    svg.selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("d", path)
    .style("fill", "steelblue")
    .on("click", clicked);
  });
}

const clicked = function(polygon) {
  var x, y, zoom, center;
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