class MapClassHandler {

  reset(map, statsSearch) {
    map.svg.selectAll("path").attr('class', (d) => {
      return this.classForState(d, statsSearch)
    })
  }

  classForState(state, statsSearch) {
    const matched = statsSearch.stateByName(state.properties.name)
    return this.classByVotes(matched)
  }

  makeActive(map, clicked) {
    map.svg.selectAll("path")
    .classed("active", (polygon) => { return polygon === clicked })
  }

  setClassByVotes({map, clicked, matched}) {
    const selectedClass = this.classByVotes(matched)
    map.svg.selectAll("path")
    .classed(selectedClass, (polygon) => { return polygon === clicked })
  }

  classByVotes(matched) {
    const republican = matched.republican_votes
    const democratic = matched.democratic_votes
    return republican > democratic ? "republican" : "democratic"
  }

}

module.exports = MapClassHandler