import './css/style.scss'

var svg = document.querySelector('object')
console.log('%c⧭', 'color: #e50000', svg);

var polygonsData = [];
var polygons;

svg.onload = function() {
  polygons = svg.contentDocument.querySelectorAll('polygon')
  for (const polygon of polygons) {
    const fill = polygon.getAttribute('fill');
    const coordsPairs = polygon.getAttribute('points').split(' ');
    const coords = coordsPairs.map(el => el.split(','));
    polygonsData.push({ coords, fill })
    // console.log('%c⧭', 'color: #917399', coords);
  }
  // console.log('%c⧭', 'color: #00a3cc', polygonsData);
  console.log('%c⧭', 'color: #d90000', polygonsData);
  var i = 0
  for (const polygon of polygons) {
    polygon.setAttribute('points', polygonsData[i + 1].coords.join(' '));
    i++;
  }
}


 