/**
 * @jsx React.DOM
 */

var _ = require('lodash');
var moment = require('moment');
var React = require('react');

var is = require('../helper/is');
var Twit = require('../data/dto/Twit');

var CTwitItem = React.createClass({

  propTypes: {
    item : is(Twit)
  },

  render: function() {
    var item = this.props.item;

    return (
      <div className="CTwitItem">
        <a className="CTwitItem-avatar" href="javascript:void(0)">
          {item.owner ? <img src={ item.owner.profile_image_url_https } alt={item.name} /> : false}
        </a>
        <div className="CTwitItem-text">
          <h4 className="CTwitItem-name">
            { item.name }
          </h4>
          { item.text }
          <div className="CTwitItem-createdAt">
            { moment(item.createdAt).fromNow() }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CTwitItem;
