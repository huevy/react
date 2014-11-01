var t = require('tcomb');
var TLocation = require('./TLocation');

var TLocationDict = t.dict(t.Str, TLocation, 'TLocationDict');

module.exports = TLocationDict;