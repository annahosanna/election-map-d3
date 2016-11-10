const election_data = require('./data/election-data')

class MapEvents {

  constructor({observers, classes}) {
    this.observers = observers
    this.classes = classes
  }

  notifyObservers(matched) {
    for(const observer of this.observers){
      observer.notify(matched);
    }
  }

  findSelected(map) {
    const selected = map.svg.selectAll(".active")._groups
    const matched = this.lookup(selected[0][0].getAttribute("data-name"))
    return matched[0]
  }

  click(clicked, map) {
    this.classes.clear(map)
    this.classes.makeActive(map, clicked)

    const matched = this.findSelected(map)

    this.classes.setClassByVotes({map, clicked, matched})

    this.notifyObservers(matched)
  }

  lookup(name) {
    return election_data.filter((item) => {
      return item.state === name
    })
  }
}

module.exports = MapEvents