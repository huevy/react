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

var App = require('./App.jsx');

React.renderComponent(
  (
    <Routes location="history">
      <Route name="index" path="/" handler={App} />
    </Routes>
  ), document.getElementById('app'));
