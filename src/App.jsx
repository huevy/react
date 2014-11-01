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
    this.state.users.getList().then(function (users){
      console.log(users);
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

  render: function() {
    return (
      <div>
        <CNewTwitsButton
          count={ this.state.unseenTwits.items.length }
          onTap={ this._onActionReadNew }
        />
        <CTwitList store={ this.state.seenTwits } />
        <CMap />

      </div>
    );
  },

});

module.exports = App;
