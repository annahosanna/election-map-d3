const election_data = require('./data/election-data')

class MapEvents {

  constructor({observers}) {
    this.observers = observers
  }

  notifyObservers(matched) {
    for(const observer of this.observers){
      observer.notify(matched);
    }
  }

  clearClasses(map) {
    map.svg.selectAll("path").attr('class','')
  }

  addActiveClass(map, clicked) {
    map.svg.selectAll("path")
    .classed("active", (polygon) => { return polygon === clicked })
  }

  findSelected(map) {
    const selected = map.svg.selectAll(".active")._groups
    const matched = this.lookup(selected[0][0].getAttribute("data-name"))
    return matched[0]
  }

  click(clicked, map) {
    this.clearClasses(map)

    this.addActiveClass(map, clicked)

    const matched = this.findSelected(map)
    const selectedClass = this.getClass(matched)

    map.svg.selectAll("path")
    .classed(selectedClass, (polygon) => { return polygon === clicked })

    this.notifyObservers(matched)
  }

  getClass(matched) {
    const republican = matched.republican_votes
    const democratic = matched.democratic_votes
    return republican > democratic ? "republican" : "democratic"
  }

  lookup(name) {
    return election_data.filter((item) => {
      return item.state === name
    })
  }
}

module.exports = MapEvents