/**
 * @jsx React.DOM
 */

var _ = require('lodash');
var t = require('tcomb');
var L = require('leaflet');
require('leaflet.markercluster');
var React = require('react');

var is = require('../../helper/is');
var TMarker = require('../../data/dto/TMarker');
var TMarkerList = require('../../data/dto/TMarkerList');
var TBubble = require('../../data/dto/TBubble');

L.Icon.Default.imagePath = '/images';

var CMap = React.createClass({
  getDefaultProps: function() {
    return {
      markers: [],
      bubble: null,
    };
  },

  propTypes: {
    markers: is(TMarkerList),
    bubble: is(t.maybe(TBubble)),
    onMarkerClick: React.PropTypes.func,
  },

  componentDidMount: function() {
    var map = L.map(this.getDOMNode());
    map.setView([51.505, -0.09], 4);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var cluster = new L.MarkerClusterGroup({
      spiderfyOnMaxZoom: true,
      spiderfyDistanceMultiplier: 3,
      removeOutsideVisibleBounds: true,
      maxClusterRadius: 60,
    });
    this.cluster = cluster;
    this.map = map;
    map.addLayer(cluster);
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    if (nextProps.markers !== this.props.markers) {
      return true;
    }
    if (nextProps.bubble !== this.props.bubble) {
      return true;
    }
    return false;
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (prevProps.markers !== this.props.markers) {
      this._syncMarkers(this.props.markers);
    }
    if (prevProps.bubble !== this.props.bubble) {
      this._syncBubble(this.props.bubble);
    }
  },

  _syncBubble: function(bubble) {
    if (this.bubble) {
      this.map.removeLayer(this.bubble);
    }
    this.bubble = L.popup()
      .setLatLng([bubble.lat, bubble.lng])
      .setContent(bubble.text);

    this.map.openPopup(this.bubble);
  },

  _syncMarkers: function(markers) {
    //TODO: sync smarter!
    this.cluster.clearLayers();
    var mapMarkers = markers.map(function(marker) {
      return L.marker([marker.lat, marker.lng], {
          icon: L.icon({
            iconUrl: marker.url,
            iconSize: [marker.w, marker.h]
          })
        })
        .on('click', this._onMarkerClick.bind(this, marker));
    }.bind(this));
    this.cluster.addLayers(mapMarkers);
  },

  _onMarkerClick: function(marker, e) {
    if (this.props.onMarkerClick) {
      this.props.onMarkerClick(marker);
    }
  },

  render: function() {
    return (
      <div className="CMap">

      </div>
    );
  },

});

module.exports = CMap;