'use strict';

function addSVGIcon (target, svgid, attrs) {
  attrs = attrs || {};

  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  for (var attr in attrs) {
    use.setAttribute(attr, attrs[attr]);
  }

  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', svgid);
  svg.appendChild(use);
  target.appendChild(svg);
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('svg-icon-code');
  addSVGIcon(button, '#svg-icon-def', {'x': 0, 'y': 0});
});
