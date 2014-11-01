var http = require('axios');
var _ = require('lodash');
var boop = require('boop');
var t = require('tcomb');
var rsvp = require('rsvp');

var TUserList = require('./dto/TUserList');
var TLocationDict = require('./dto/TLocationDict');
var TGeoDict = require('./dto/TGeoDict');
var TGeoUser = require('./dto/TGeoUser');
var TGeoUserList = require('./dto/TGeoUserList');

function zipAll(users, locations, geo) {
  return TGeoUserList(_(users)
    .map(function(user) {
      var userLocation, userGeo;
      userLocation = locations[user.screen_name];
      if (userLocation) {
        userGeo = geo[userLocation.location];
      }
      return [user, userGeo];
    })
    .filter(function(tupleUserGeo) {
      return undefined !== tupleUserGeo[1];
    })
    .map(function(tupleUserGeo) {
      return TGeoUser.createFromTuple(tupleUserGeo);
    })
    .value());
}


var TUsersOptions = t.struct({
  users: t.Str,
  geo: t.Str,
  locations: t.Str,
});

var Users = boop.extend({
  initialize: function(options) {
    this.options = TUsersOptions(options);
  },

  _getLocations: function() {
    return http
      .get(this.options.locations)
      .then(function(res) {
        return TLocationDict(res.data);
      })
  },

  _getUsers: function() {
    return http
      .get(this.options.users)
      .then(function(res) {
        return TUserList(res.data);
      })
  },

  _getGeo: function() {
    return http
      .get(this.options.geo)
      .then(function(res) {
        return TGeoDict(res.data);
      })
  },

  getList: function() {
    return rsvp
      .all([
        this._getUsers(),
        this._getLocations(),
        this._getGeo(),
      ])
      .then(function(results) {
        var users = results[0];
        var locations = results[1];
        var geo = results[2];

        return zipAll(users, locations, geo);
      })
  },
});

module.exports = Users;