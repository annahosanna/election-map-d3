class MapClassHandler {

  clear(map) {
    map.svg.selectAll("path").attr('class','')
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