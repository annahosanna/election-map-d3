class StatsSearch {
  constructor(data) {
    this.data = data
  }

  stateByName(name) {
    return this.data.filter((item) => {
      return item.state === name
    })
  }
}

module.exports = StatsSearch