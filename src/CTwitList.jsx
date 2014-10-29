/**
 * @jsx React.DOM
 */

var _ = require('lodash');
var React = require('react');
var TwitList = require('./data/dto/TwitList');

var CTwitList = React.createClass({

  propTypes: {
    items : React.PropTypes.instanceOf(TwitList)
  },

  _renderItem: function(item) {
    return <li key={item.id}>{item.text}</li>;
  },

  render: function() {
    return (
      <div className="TwitList">
        <ul>
          { this.props.items.map(this._renderItem) }
        </ul>
      </div>
    );
  }
});

module.exports = CTwitList;
