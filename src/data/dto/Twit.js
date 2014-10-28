// createdAt: "2014-10-02T14:31:14.000Z"
// id: "517683229730811905"
// name: "Хуёвый Washington DC"
// screenName: "ZhidoBandera"
// text: "RT @novostidnua: Турчинов: Москва нарушила мир. Законы по Донбассу теряют смысл http://t.co/yCJySORa6a"
// userFollowersCount: 2388
// userName: "Хуёвый Washington DC"

var t = require('tcomb');
var TwitRaw, Twit;

//--------------------------------------------------------------------

TwitRaw = t.struct({
  createdAt: t.Str,
  id: t.Str,
  name: t.Str,
  screenName: t.Str,
  text: t.Str,
  userFollowersCount: t.Num,
}, 'TwitRaw');

TwitRaw.prototype.toTwit = function() {
  return new Twit({
    id: this.id,
    name: this.name,
    text: this.text,
    createdAt: new Date(this.createdAt),
    screenName: this.screenName,
    userFollowersCount: this.userFollowersCount,
  });
};

//--------------------------------------------------------------------

Twit = t.struct({
  createdAt: t.Dat,
  id: t.Str,
  name: t.Str,
  screenName: t.Str,
  text: t.Str,
  userFollowersCount: t.Num,
}, 'Twit');

Twit.fromRaw = function(raw) {
  raw = TwitRaw(raw);
  return raw.toTwit();
};

//--------------------------------------------------------------------

module.exports = Twit;
