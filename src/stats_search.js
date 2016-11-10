class StatsSearch {
  constructor(data) {
    this.data = data
  }

  stateByName(name) {
    return this.data[name]
  }
}

module.exports = StatsSearch