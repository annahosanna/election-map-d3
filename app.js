window.onload = function() {

  var width = 1000;
  var height = 500;

  var projection = createProjection(width, height);
  var path = createPath(projection);

  var svg = createSVG(width, height);

  addData(svg, path);

}