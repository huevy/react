/**
 * @jsx React.DOM
 */

var React = require('react');

var CNewTwitsButton = React.createClass({

  propTypes: {
    count: React.PropTypes.number,
    onTap: React.PropTypes.func,
  },

  _getStyle: function() {
    return {
      display: this.props.count > 0 ? 'block' : 'none'
    };
  },

  render: function() {
    return (
      <button
          className="CNewTwitsButton"
          style={this._getStyle()}
          onClick={ this.props.onTap }>
        { this.props.count } new tweets
      </button>
    );
  }
});

module.exports = CNewTwitsButton;