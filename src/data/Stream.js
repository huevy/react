var io = require('./io');
var dbApis = require('./apis');
var Twit = require('./dto/Twit');
var events = require('events');
var util = require('util');

function Stream(users) {
  this.users = users;

  var sock = io.connect(dbApis.socket, {
    transports: ['xhr-polling']
  });
  sock.on('twit', this._onTwit.bind(this));
}

util.inherits(Stream, events.EventEmitter);

module.exports = Stream;

Stream.prototype._onTwit = function(data) {
  var twit = Twit.fromRaw(data);

  this.users.getByScreenName(twit.screenName).then(function(user) {
    if (user) {
      twit = twit.setOwner(user);
    }
    this.emit('twit', twit);
  }.bind(this));
};