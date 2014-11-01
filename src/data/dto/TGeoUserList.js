var t = require('tcomb');
var TGeoUser = require('./TGeoUser');

var TGeoUserList = t.list(TGeoUser, 'TGeoUserList');

module.exports = TGeoUserList;