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
var Test = require('./Test.jsx');

React.renderComponent(
  (
    <Routes location="history">
      <Route name="index" path="/" handler={App} />
      <Route name="test" path="/test" handler={Test} />
    </Routes>
  ), document.getElementById('app'));
