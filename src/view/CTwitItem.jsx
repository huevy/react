/**
 * @jsx React.DOM
 */

var _ = require('lodash');
var moment = require('moment');
var React = require('react');
var Twit = require('../data/dto/Twit');

var CTwitItem = React.createClass({

  propTypes: {
    item : React.PropTypes.instanceOf(Twit)
  },

  render: function() {
    return (
      <li key={ this.props.item.id } className="CTwitItem">
        <div className="CTwitItem-createdAt">
          { moment(this.props.item.createdAt).fromNow() }
        </div>
        <div className="CTwitItem-name">
          { this.props.item.name }
        </div>
        <div className="CTwitItem-text">
          { this.props.item.text }
        </div>
      </li>
    );
  }
});

module.exports = CTwitItem;
