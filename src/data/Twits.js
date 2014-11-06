var http = require('axios');
var _ = require('lodash');
var boop = require('boop');
var t = require('tcomb');
var rsvp = require('rsvp');

var Users = require('./Users');

var TwitList = require('./dto/TwitList');


var TTwitsOptions = t.struct({
  twits: t.Str,
  users: t.Str,
  geo: t.Str,
  locations: t.Str,
});

function zipAll(twits, users) {
  var usersMap = _(users).indexBy('screen_name').value();
  return _(twits).map(function(twit) {
    var user = usersMap[twit.screenName]; //TODO: later we will resolve it by ID
    if (user) {
      return twit.setOwner(user);
    }
    return twit;
  }).value();
}

var Twits = boop.extend({
  initialize: function(options, users) {
    this.options = TTwitsOptions(options);
    this.users = users;
  },

  _getTwits: function() {
    return http.get(this.options.twits)
      .then(function(res) {
        return TwitList.fromRaw(res.data);
      })
  },

  getList: function() {
    return rsvp.hash({
      users: this.users.getList(),
      twits: this._getTwits(),
    }).then(function(all) {
      var users = all.users;
      var twits = all.twits;
      return zipAll(twits, users);
    });
  },
});

module.exports = Twits;