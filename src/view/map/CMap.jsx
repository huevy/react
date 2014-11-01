/**
 * @jsx React.DOM
 */

var React = require('react');
var L = require('leaflet');

var CMap = React.createClass({
  componentDidMount: function() {
    var map = L.map(this.getDOMNode());
    map.setView([51.505, -0.09], 4);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  },

  render: function() {
    return (
      <div className="CMap">

      </div>
    );
  }

});

module.exports = CMap;