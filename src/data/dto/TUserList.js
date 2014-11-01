var t = require('tcomb');
var TUser = require('./TUser');

var TUserList = t.list(TUser, 'TUserList');

module.exports = TUserList;