/**
 * @jsx React.DOM
 */

var React = require('react');

var CNewTwitsButton = React.createClass({

  propTypes: {
    count : React.PropTypes.number,
    onTap : React.PropTypes.func,
  },

  _getStyle: function () {
    return {
      display: this.props.count > 0 ? 'block' : 'none'
    };
  },

  render: function() {
    return (
      <div className="CNewTwitsButton" style={this._getStyle()}>
        <a href="javascript:void(0)"
           onClick={ this.props.onTap }>
          { this.props.count } new tweets
        </a>
      </div>
    );
  }
});

module.exports = CNewTwitsButton;
