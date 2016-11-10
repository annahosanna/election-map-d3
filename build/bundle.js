/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Map = __webpack_require__(1)
	
	window.onload = function() {
	  new Map({width: 800, height: 500, scale: 1000});
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	class Map {
	  constructor({width, height, scale}) {
	    this.width = width;
	    this.height = height;
	    this.scale = scale;
	
	    this.projection = this.createProjection();
	    this.path = this.createPath();
	    this.svg = this.createSVG();
	    this.addData();
	  }
	
	  createPath() {
	    return d3.geo.path().projection(this.projection);
	  }
	
	  createProjection() {
	    return d3.geo.albersUsa()
	      .translate([this.width/2, this.height/2])
	      .scale([this.scale]);
	  }
	
	  createSVG() {
	    return d3.select("#map")
	    .append("svg")
	    .attr("width", this.width)
	    .attr("height", this.height)
	    .attr("id", "states")
	  }
	
	  addData() {
	    d3.json("/data/us-states.json", function(json) {
	
	      this.svg.selectAll("path")
	      .data(json.features)
	      .enter()
	      .append("path")
	      .attr("d", this.path)
	      .attr("data-name", function(d) {
	                      return d.properties.name
	                   })
	      .attr("data-name", function(d) {
	                      return d.properties.name
	                   })
	      .on("click", this.setActive.bind(this));
	    }.bind(this));
	  }
	
	  setActive(clicked) {
	    this.svg.selectAll("path")
	    .attr('class','')
	
	    this.svg.selectAll("path")
	    .classed("active", (polygon) => { return polygon === clicked; })
	
	    const selected = this.svg.selectAll(".active")
	    const matched = this.lookup(selected[0][0].getAttribute("data-name"))[0]
	
	    const selectedClass = this.getClass(matched)
	
	    this.svg.selectAll("path")
	    .classed(selectedClass, (polygon) => { return polygon === clicked; })
	
	    this.showInfo(matched)
	  }
	
	  getClass(matched) {
	    const republican = matched.republican_votes
	    const democratic = matched.democratic_votes
	    return republican > democratic ? "republican" : "democratic"
	  }
	
	  showInfo(matched) {
	    const element = document.querySelector("#info div")
	    element.style.visibility = "visible"
	    const source   = document.querySelector("#state-info").innerHTML;
	    const template = Handlebars.compile(source);
	    const html = template(matched);
	    element.innerHTML = html;
	  }
	
	  lookup(name) {
	    return data.filter((item) => {
	      return item.state === name
	    })
	  }
	}
	
	module.exports = Map;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map