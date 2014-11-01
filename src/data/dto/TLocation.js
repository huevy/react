var t = require('tcomb');

var TLocation = t.struct({
  screen_name: t.Str,
  name: t.maybe(t.Str),
  location: t.Str,
});

module.exports = TLocation;