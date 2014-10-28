var t = require('tcomb');
var Twit = require('./Twit');

var TwitList = t.list(Twit, 'TwitList');

module.exports = TwitList;