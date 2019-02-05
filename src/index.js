import './css/style.scss'

var svg = document.querySelector('object')
svg.height = 400;
svg.width = window.innerWidth;
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
    if (i < polygons.length - 1) {
      polygon.setAttribute('points', polygonsData[i + 1].coords.join(' '));
    }
    i++;
  }
  animation();
}


var j = 0;
function animation () {
  setInterval(() => {
    j = (j + 1) % window.innerWidth;
    window.requestAnimationFrame(moveAllPolygons.bind(null, j, 100));
    console.log('%c⧭', 'color: #807160', j);
  }, 1)
}

function moveAllPolygons (x, y) {
  console.log('%c⧭', 'color: #731d1d', x, y);
  var i = 0;
  for (const polygon of polygons) {
    // y = Math.random() * y;
    console.log('%c⧭', 'color: #007300', y);
    let coordsNew = [];
    for (const coord of polygonsData[i].coords) {
      coordsNew.push([
        +coord[0] + x,
        +coord[1] + y
      ])
    }
    polygon.setAttribute('points', coordsNew.join(' '));
    i++;
  }
}