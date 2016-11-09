window.onload = function() {

  var width = 1000;
  var height = 500;

  var projection = map.createProjection(width, height);
  var path = map.createPath(projection);

  var svg = map.createSVG(width, height);

  map.addData(svg, path);

}