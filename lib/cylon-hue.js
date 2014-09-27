/*
 * cylon-hue
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Your License Here
*/

'use strict';

var Cylon = require('cylon');

var Adaptor = require('./adaptor'),
    Driver = require('./driver');

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  },

  register: function(robot) {
    // Bootstrap your adaptor here. For example, with a Sphero, you would call
    // the registerAdaptor and registerDriver functions as follows:
    //
    robot.registerAdaptor('cylon-hue', 'hue');
    robot.registerDriver('cylon-hue', 'hue-bulb');
  }
};
