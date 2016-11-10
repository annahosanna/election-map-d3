class MapEvents {

  constructor({observers, classes, statsSearch}) {
    this.observers = observers
    this.classes = classes
    this.statsSearch = statsSearch
  }

  notifyObservers(matched) {
    for(const observer of this.observers){
      observer.notify(matched);
    }
  }

  // findSelected(map) {
  //   const selected = map.svg.selectAll(".active")._groups
  //   const matched = this.statsSearch.stateByName(selected[0][0].getAttribute("data-name"))
  //   return matched[0]
  // }

  click(clicked, map) {
    //this.classes.reset(map)
    //this.classes.makeActive(map, clicked)

    const matched = this.statsSearch.stateByName(clicked.properties.name)
    //this.classes.setClassByVotes({map, clicked, matched})

    this.notifyObservers(matched)
  }
}

module.exports = MapEvents