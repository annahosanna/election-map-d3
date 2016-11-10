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

  click(clicked, map) {
    this.classes.reset(map, this.statsSearch)
    this.classes.makeActive(map, clicked)
    const matched = this.statsSearch.stateByName(clicked.properties.name)
    this.notifyObservers(matched)
  }
}

module.exports = MapEvents