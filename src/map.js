const d3 = require('d3')

class Map {
  constructor({width, height, scale, events}) {
    this.width = width
    this.height = height
    this.scale = scale
    this.events = events

    this.projection = this.createProjection()
    this.path = this.createPath()
    this.svg = this.createSVG()
    this.addData()
  }

  createPath() {
    return d3.geoPath().projection(this.projection)
  }

  createProjection() {
    return d3.geoAlbersUsa()
    .translate([this.width/2, this.height/2])
    .scale([this.scale])
  }

  createSVG() {
    return d3.select("#map")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .attr("id", "states")
  }

  addData() {
    //weird, this has to be in the build folder - sad
    d3.json("./data/us-states.json", function(json) {
      this.svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", this.path)
      .attr("data-name", function(d) {
        return d.properties.name
      })
      .attr("data-name", function(d) {
        return d.properties.name
      })
      .on("click", this.handleClick.bind(this))
    }.bind(this))
  }

  handleClick(clicked) {
    this.events.click(clicked, this)
  }

}

module.exports = Map