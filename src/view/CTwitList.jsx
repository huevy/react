/**
 * @jsx React.DOM
 */

var _ = require('lodash');
var React = require('react');
var TwitList = require('../data/dto/TwitList');

var CTwitItem = require('./CTwitItem.jsx');

var CTwitList = React.createClass({

  propTypes: {
    items : React.PropTypes.instanceOf(TwitList)
  },

  _renderItem: function(item) {
    return <CTwitItem item={ item } />;
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
