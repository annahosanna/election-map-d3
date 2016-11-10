const Map = require('./map')
const MapEvents = require('./map_events')
const InfoView = require('./info_view')

window.onload = function() {
  const infoView = new InfoView()

  const observers = [infoView]
  const mapEvents = new MapEvents({observers})
  const map = new Map({width: 800, height: 500, scale: 1000, events: mapEvents})

}