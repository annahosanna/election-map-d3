const Handlebars = require('handlebars')

class InfoView {
  notify(matched) {
    const element = document.querySelector("#info div")
    element.style.visibility = "visible"
    const source   = document.querySelector("#state-info").innerHTML
    const template = Handlebars.compile(source)
    
    const html = template(this.prettify(matched))
    element.innerHTML = html
  }

  prettify(item) {
    const pretty = Object.assign({}, item)
    Object.keys(pretty).map(function(key, index) {
       pretty[key] = pretty[key].toLocaleString()
    });
    return pretty
  }
}

module.exports = InfoView