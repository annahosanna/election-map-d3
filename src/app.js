const Map = require('./map/map')
const MapEvents = require('./map/events')
const InfoView = require('./info_view')
const MapClassHandler = require('./map/class_handler')
const StatsSearch = require('./stats_search')
const election_data = require('./data/election-data')
const BarChart = require('./charts/bar_chart')

window.onload = function() {

  const statsSearch = new StatsSearch(election_data)
  const classes = new MapClassHandler

  const infoView = new InfoView()
  const observers = [infoView]

  
  const mapEvents = new MapEvents({observers, classes, statsSearch})
  const map = new Map({width: 800, height: 500, scale: 1000, events: mapEvents, classes: classes, statsSearch: statsSearch})

  new BarChart()
}