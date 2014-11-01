var t = require('tcomb');

var TGeo = t.struct({
  lat: t.Num,
  lng: t.Num,
});

module.exports = TGeo;