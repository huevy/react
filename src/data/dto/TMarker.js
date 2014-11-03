var t = require('tcomb');

var TMarker = t.struct({
  id: t.Str,
  lat: t.Num,
  lng: t.Num,
  url: t.Str,
  w: t.Num,
  h: t.Num,
});

module.exports = TMarker;