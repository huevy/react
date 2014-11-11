/**
 * @jsx React.DOM
 */

var React = require('react');
var CNavBar = require('./view/CNavBar.jsx');


var Test = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <CNavBar />
        <div className="well">Test</div>
      </div>
    );
  },

});

module.exports = Test;
