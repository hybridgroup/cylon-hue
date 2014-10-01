/*
 * cylon-hue
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Your License Here
*/

'use strict';

var Cylon = require('cylon');

var Adaptor = require('./adaptor');
var Drivers = {
  'hue-bridge': require('./bridge'),
  'hue-light': require('./light')
};

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    for (var d in Drivers) {
      if (opts.name === d) {
        return new Drivers[d](opts);
      }
    }

    return null;
  },

  register: function(robot) {
    robot.registerAdaptor('cylon-hue', 'hue');
    for (var d in Drivers) {
      robot.registerDriver('cylon-hue', d);
    }
  }
};
