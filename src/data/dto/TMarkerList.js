var t = require('tcomb');
var TMarker = require('./TMarker');

var TMarkerList = t.list(TMarker, 'TMarkerList');

module.exports = TMarkerList;