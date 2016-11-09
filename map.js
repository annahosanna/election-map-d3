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
    .style("fill", "steelblue");
  });
}