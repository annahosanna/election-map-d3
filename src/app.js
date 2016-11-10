const Map = require('./map')
const InfoView = require('./info_view')

window.onload = function() {
  infoView = new InfoView()
  new Map({width: 800, height: 500, scale: 1000, observers:[infoView]})

}