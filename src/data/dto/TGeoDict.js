var t = require('tcomb');
var TGeo = require('./TGeo');

var TGeoDict = t.dict(t.Str, TGeo, 'TGeoDict');

module.exports = TGeoDict;