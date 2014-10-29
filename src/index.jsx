/**
 * @jsx React.DOM
 */

var React = require('react');

var App = require('./App.jsx');

React.renderComponent(
  <App />, document.getElementById('app'));