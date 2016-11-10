const d3 = require('d3')

class Map {
  constructor({width, height, scale, observers}) {
    this.width = width
    this.height = height
    this.scale = scale
    this.observers = observers;

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
    d3.json("/data/us-states.json", function(json) {

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
      .on("click", this.setActive.bind(this))
    }.bind(this))
  }

  notifyObservers(matched) {
    for(const observer of this.observers){
      observer.notify(matched);
    }
  }

  setActive(clicked) {
    this.svg.selectAll("path")
    .attr('class','')

    this.svg.selectAll("path")
    .classed("active", (polygon) => { return polygon === clicked; })

    const selected = this.svg.selectAll(".active")._groups
    const matched = this.lookup(selected[0][0].getAttribute("data-name"))[0]

    const selectedClass = this.getClass(matched)

    this.svg.selectAll("path")
    .classed(selectedClass, (polygon) => { return polygon === clicked })

    this.notifyObservers(matched)
  }

  getClass(matched) {
    const republican = matched.republican_votes
    const democratic = matched.democratic_votes
    return republican > democratic ? "republican" : "democratic"
  }

  lookup(name) {
    return data.filter((item) => {
      return item.state === name
    })
  }
}

module.exports = Map