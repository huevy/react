/**
 * @jsx React.DOM
 */

var React = require('react');

var App = require('./app');

React.renderComponent(
  <App />, document.getElementById('app'));