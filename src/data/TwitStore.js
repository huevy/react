var _ = require('lodash');
var t = require('tcomb');
var boop = require('boop');
var TwitList = require('./dto/TwitList');
var Twit = require('./dto/Twit');

var TwitStore = t.struct({
  items: TwitList
});

TwitStore.prototype.concat = function(items) {
  return TwitStore.update(this, {
    items: {
      $unshift: items,
    }
  });
};

TwitStore.prototype.push = function(twit) {
  return TwitStore.update(this, {
    items: {
      $unshift: [twit],
    }
  });
};
TwitStore.createEmpty = function() {
  return new TwitStore({
    items: [],
  });
};

module.exports = TwitStore;
