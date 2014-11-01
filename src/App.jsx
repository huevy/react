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


var App = React.createClass({

  getInitialState: function () {
    return {
      unseenTwits: Store.createEmpty(),
      seenTwits: Store.createEmpty(),
      stream: new Stream(),
      // stream: new FakeStream(),
    }
  },

  componentDidMount: function () {
    this.state.stream.on('twit', this._onTwit);  
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
