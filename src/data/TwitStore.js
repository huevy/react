var _ = require('lodash');
var t = require('tcomb');
var boop = require('boop');
var TwitList = require('./dto/TwitList');
var Twit = require('./dto/Twit');

var TwitStore = t.struct({
  items: TwitList
});

TwitStore.prototype.concat = function(store) {
  return TwitStore.update(this, {
    items: {
      $prepend: store.items,
    }
  });
};

TwitStore.prototype.push = function(twit) {
  return TwitStore.update(this, {
    items: {
      $prepend: [twit],
    }
  });
};
TwitStore.createEmpty = function() {
  return new TwitStore({
    items: [],
  });
};

module.exports = TwitStore;
