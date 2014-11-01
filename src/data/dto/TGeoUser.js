var t = require('tcomb');
var TUser = require('./TUser');
var TGeo = require('./TGeo');
var _ = require('lodash');

var TGeoUser = t.struct({
  id_str: t.Str,
  name: t.maybe(t.Str),
  screen_name: t.Str,
  description: t.maybe(t.Str),
  url: t.maybe(t.Str),
  profile_image_url_https: t.Str,
  followers_count: t.Num,
  friends_count: t.Num,
  listed_count: t.Num,
  statuses_count: t.Num,
  geo: TGeo,
});

TGeoUser.createFromTuple = function(tupleUserGeo) {
  return TGeoUser(_.assign({
    geo: tupleUserGeo[1]
  }, tupleUserGeo[0]));
};

module.exports = TGeoUser;