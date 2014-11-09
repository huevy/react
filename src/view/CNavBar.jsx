/**
 * @jsx React.DOM
 */

var React = require('react');

var CNavBar = React.createClass({

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><a href="#">Link</a></li>
            <li className="active"><a href="#">Link</a></li>
          </ul>
        </div>
      </nav>
    );
  }

});

module.exports = CNavBar;