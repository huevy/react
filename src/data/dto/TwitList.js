var t = require('tcomb');
var Twit = require('./Twit');

var TwitList = t.list(Twit, 'TwitList');

TwitList.fromRaw = function(rawList) {
  return TwitList(rawList.map(function(it) {
    return Twit.fromRaw(it);
  }));
};

module.exports = TwitList;