/**
 * @jsx React.DOM
 */

var React = require('react');

var Stream = require('./data/Stream');
var FakeStream = require('./data/FakeStream');
var Store  = require('./data/TwitStore');

var CTwitList  = require('./view/CTwitList.jsx');
var CNewTwitsButton  = require('./view/CNewTwitsButton.jsx');
var CMap  = require('./view/map/CMap.jsx');

var Users  = require('./data/Users');
var apis  = require('./data/apis');

var TMarker = require('./data/dto/TMarker');
var TBubble = require('./data/dto/TBubble');


var App = React.createClass({

  getInitialState: function () {
    return {
      unseenTwits: Store.createEmpty(),
      seenTwits: Store.createEmpty(),
      stream: new Stream(),
      // stream: new FakeStream(),
      users: new Users(apis),
    }
  },

  componentDidMount: function () {
    this.state.stream.on('twit', this._onTwit);

    this.state.users.getList()
      .then(function (users){
        this.setState({
          markers: this._userListToMarkerList(users)
        });
      }.bind(this)
    );

  },

  _userListToMarkerList: function (userList) {
    return userList.map(function (user) {
      return new TMarker({
        id: user.id_str,
        lat: user.geo.lat,
        lng: user.geo.lng,
        w: 64,
        h: 64,
        url: user.profile_image_url_https,
      });
    });
  },

  _onTwit: function (twit) {
    this._addUnseenTwit(twit);
  },

  _addUnseenTwit: function(twit) {
    this.setState({
      unseenTwits: this.state.unseenTwits.push(twit),
    });
  },

  _readNew: function() {
    this.setState({
      seenTwits: this.state.seenTwits.concat(this.state.unseenTwits),
      unseenTwits: Store.createEmpty(),
    });
  },

  _onActionReadNew: function() {
    this._readNew();
  },

  _onMarkerClick: function (marker) {
    var bubble = new TBubble({
      lng: marker.lng,
      lat: marker.lat,
      text: 'Text',
    });

    this.setState({
      mapBubble: bubble,
    });
  },

  render: function() {
    return (
      <div>
        <CNewTwitsButton
          count={ this.state.unseenTwits.items.length }
          onTap={ this._onActionReadNew }
        />
        <CTwitList store={ this.state.seenTwits } />
        <CMap
          markers={ this.state.markers }
          bubble={ this.state.mapBubble }
          onMarkerClick={ this._onMarkerClick }
        />

      </div>
    );
  },

});

module.exports = App;
