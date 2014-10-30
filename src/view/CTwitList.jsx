/**
 * @jsx React.DOM
 */

var _ = require('lodash');
var React = require('react');
var is = require('../helper/is');

var TwitStore = require('../data/TwitStore');
var CTwitItem = require('./CTwitItem.jsx');

var CTwitList = React.createClass({

  propTypes: {
    store : is(TwitStore)
  },

  _renderItem: function(item) {
    return <CTwitItem item={ item } key={ item.id } />;
  },

  render: function() {
    return (
      <div className="TwitList">
        <ul>
          { this.props.store.items.map(this._renderItem) }
        </ul>
      </div>
    );
  }
});

module.exports = CTwitList;
