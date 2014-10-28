var io = require('./io');
var dbApis = require('./apis');
var Twit = require('./dto/Twit');
var events = require('events');
var util = require('util');

var id = 0;

function createFakeTweet() {
  return {
    id: '2342343242',
    name: 'sdvsdv',
    text: '#' + (++id),
    createdAt: '2014',
    screenName: 'Sdvs Dv',
    userFollowersCount: 32,
  };
}

function Stream() {
  setInterval(this._onTwit.bind(this), 2000);
}

util.inherits(Stream, events.EventEmitter);

module.exports = Stream;

Stream.prototype._onTwit = function(data) {
  var twit = Twit.fromRaw(createFakeTweet());
  this.emit('twit', twit);
};