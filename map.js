var map = {
  createPath: (projection) => {
    return d3.geo.path().projection(projection);
  },
  createProjection: (width, height) => {
    return d3.geo.albersUsa().translate([width/2, height/2]).scale([900]);
  },
  createSVG: (width, height) => {
    return d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  },
  addData: (svg, path) => {
    d3.json("us-states.json", function(json) {
      svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "steelblue");
    });
  }
}