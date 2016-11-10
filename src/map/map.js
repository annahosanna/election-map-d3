const d3 = require('d3')
const usStates = require('../data/us-states')

class Map {
  
  constructor({width, height, scale, events, classes, statsSearch}) {
    this.width = width
    this.height = height
    this.scale = scale
    this.events = events
    this.classes = classes
    this.statsSearch = statsSearch

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
      this.svg.selectAll("path")
      .data(usStates.features)
      .enter()
      .append("path")
      .attr('class', (d) => {
        return this.classes.classForState(d, this.statsSearch)
      })
      .style("stroke", "#eee")
      .style("stroke-width", "1")
      .attr("d", this.path)
      .attr("data-name", function(d) {
        return d.properties.name
      })
      .on("click", this.handleClick.bind(this))
  }

  handleClick(clicked) {
    this.events.click(clicked, this)
  }

}

module.exports = Map