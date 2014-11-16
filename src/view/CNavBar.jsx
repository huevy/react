/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

var CNavBar = React.createClass({

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="index">Home</Link></li>
          </ul>
        </div>
      </nav>
    );
  }

});

module.exports = CNavBar;
