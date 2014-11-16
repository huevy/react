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
    <Routes location="hash">
      <Route name="index" path="/?:mapBubble?" handler={App}></Route>
    </Routes>
  ), document.getElementById('app'));
