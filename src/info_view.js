const Handlebars = require('handlebars')

class InfoView {

  constructor() {
    Handlebars.registerHelper('voteCheck', function (party1, party2, className) {
        return party1 > party2 ? className : '';
    });
  }

  notify(matched) {
    const element = document.querySelector("#info div")
    element.style.visibility = "visible"
    const source   = document.querySelector("#state-info").innerHTML
    const template = Handlebars.compile(source)
    
    const context = this.prettify(matched);
    const html = template(context)
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