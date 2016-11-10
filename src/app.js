const Map = require('./map')
const MapEvents = require('./map_events')
const InfoView = require('./info_view')
const MapClassHandler = require('./map_class_handler')
const StatsSearch = require('./stats_search')
const election_data = require('./data/election-data')

window.onload = function() {

  const statsSearch = new StatsSearch(election_data)
  const infoView = new InfoView()

  const observers = [infoView]
  const classes = new MapClassHandler
  const mapEvents = new MapEvents({observers, classes, statsSearch})
  const map = new Map({width: 800, height: 500, scale: 1000, events: mapEvents})

}