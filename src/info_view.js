const Handlebars = require('handlebars')

class InfoView {
  notify(matched) {
    const element = document.querySelector("#info div")
    element.style.visibility = "visible"
    const source   = document.querySelector("#state-info").innerHTML
    const template = Handlebars.compile(source)
    const html = template(matched)
    element.innerHTML = html
  }
}

module.exports = InfoView