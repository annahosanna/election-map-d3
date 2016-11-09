class Map {
  constructor({width, height, scale}) {
    this.width = width;
    this.height = height;
    this.scale = scale;

    this.projection = this.createProjection();
    this.path = this.createPath();
    this.svg = this.createSVG();
    this.addData();
  }

  createPath() {
    return d3.geo.path().projection(this.projection);
  }

  createProjection() {
    return d3.geo.albersUsa()
      .translate([this.width/2, this.height/2])
      .scale([this.scale]);
  }

  createSVG() {
    return d3.select("body")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .attr("id", "states")
  }

  addData() {
    d3.json("us-states.json", function(json) {
      this.svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", this.path)
      .on("click", this.clicked.bind(this));
    }.bind(this));
  }

  clicked(polygon) {
    let center = null;
    if (polygon && center !== polygon) center = polygon;

    this.svg.selectAll("path")
    .classed("active", center && function(polygon) { return polygon === center; });
  }
}