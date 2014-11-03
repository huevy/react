/**
 * @jsx React.DOM
 */

var React = require('react');
var L = require('leaflet');
require('leaflet.markercluster');
L.Icon.Default.imagePath = '/images';

var CMap = React.createClass({
  componentDidMount: function() {
    var map = L.map(this.getDOMNode());
    map.setView([51.505, -0.09], 4);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // L.marker([51.505, -0.09]).addTo(map);
    // debugger
    var cluster = new L.MarkerClusterGroup();
    this.cluster = cluster;
    cluster.addLayer(L.marker([51.505, -0.09]));
    cluster.addLayer(L.marker([51.505, -0.09]));
    map.addLayer(cluster);
    // map.addLayer(L.marker([51.505, -0.09]));
  },

  render: function() {
    return (
      <div className="CMap">

      </div>
    );
  }

});

module.exports = CMap;
