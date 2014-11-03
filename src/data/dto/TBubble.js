var t = require('tcomb');

var TBubble = t.struct({
  lat: t.Num,
  lng: t.Num,
  text: t.Str,
});

module.exports = TBubble;