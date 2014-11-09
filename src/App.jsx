/**
 * @jsx React.DOM
 */

var React = require('react');

var Stream = require('./data/Stream');
var FakeStream = require('./data/FakeStream');
var Store = require('./data/TwitStore');

var CTwitList = require('./view/CTwitList.jsx');
var CNewTwitsButton = require('./view/CNewTwitsButton.jsx');
var CMap = require('./view/map/CMap.jsx');
var CNavBar = require('./view/CNavBar.jsx');

var apis = require('./data/apis');
var Users = require('./data/Users');
var Twits = require('./data/Twits');

var TMarker = require('./data/dto/TMarker');
var TBubble = require('./data/dto/TBubble');



var App = React.createClass({

  getInitialState: function() {
    return {
      unseenTwits: Store.createEmpty(),
      seenTwits: Store.createEmpty(),
    }
  },

  componentDidMount: function() {
    // this.stream = new FakeStream();
    this.users = new Users(apis);
    this.twits = new Twits(apis, this.users);
    this.stream = new Stream(this.users);

    this.twits.getList()
      .then(function(twits) {
        this._showInitialTwits(twits)
        this.stream.on('twit', this._onTwit);
      }.bind(this));

    this.users.getList()
      .then(function(users) {
        this.setState({
          markers: this._userListToMarkerList(users)
        });
      }.bind(this));

  },

  _userListToMarkerList: function(userList) {
    return userList.map(function(user) {
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

  _onTwit: function(twit) {
    this._addUnseenTwit(twit);
  },

  _addUnseenTwit: function(twit) {
    this.setState({
      unseenTwits: this.state.unseenTwits.push(twit),
    });
  },

  _showInitialTwits: function(twits) {
    this.setState({
      seenTwits: this.state.seenTwits.concat(twits),
    });
  },

  _readUnseenTwits: function() {
    this.setState({
      seenTwits: this.state.seenTwits.concat(this.state.unseenTwits.items),
      unseenTwits: Store.createEmpty(),
    });
  },

  _onActionReadNew: function() {
    this._readUnseenTwits();
  },

  _onMarkerClick: function(marker) {
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
      <div className="container-fluid">
        <CNavBar />

        <div className="row">
          <div className="col-xs-5">
            <CNewTwitsButton
              count={ this.state.unseenTwits.items.length }
              onTap={ this._onActionReadNew }
            />
            <CTwitList store={ this.state.seenTwits } />
          </div>
        </div>
        
        <div className="AppMap col-xs-7 col-xs-offset-5">
          <CMap
            markers={ this.state.markers }
            bubble={ this.state.mapBubble }
            onMarkerClick={ this._onMarkerClick }
          />
        </div>

      </div>
    );
  },

});

module.exports = App;