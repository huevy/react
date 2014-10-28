/**
 * @jsx React.DOM
 */

var React = require('react');
var Stream = require('./data/stream');
var FakeStream = require('./data/FakeStream');
var Store  = require('./data/TwitStore');
var CTwitList  = require('./CTwitList.jsx');



var App = React.createClass({

  // propTypes: {
  //   unseenTwits: React.PropTypes.instanceOf(Store),
  //   seenTwits: React.PropTypes.instanceOf(Store)
  // },

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
        <div>
          {
            this.state.unseenTwits.items.length ? (
              <a href="javascript:void(0)"
                 onClick={ this._onActionReadNew }>
                Unseen { this.state.unseenTwits.items.length }
              </a>
            ) : undefined
          }
        </div>

        <CTwitList items={ this.state.seenTwits.items } />

      </div>
    );
  },

});

// // var stream = new Stream();
// var stream = new FakeStream();
// var store = Store.createEmpty();

// // var unseenTwits = new Store();
// stream.on('twit', function(twit) {
//   console.log('twit', twit);
//   store = store.push(twit);
//   console.log(store.items);
// });

module.exports = App;
