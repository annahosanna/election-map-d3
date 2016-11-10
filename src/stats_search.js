class StatsSearch {
  constructor(data) {
    this.data = data
  }

  stateByName(name) {
    let matched = this.data[name]
    matched.state = name
    return matched
  }
}

module.exports = StatsSearch