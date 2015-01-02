/*
 * cylon-hue
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Your License Here
*/

"use strict";

var Adaptor = require("./adaptor");

var Drivers = {
  "hue-bridge": require("./bridge"),
  "hue-light": require("./light")
};

module.exports = {
  adaptors: ["hue"],
  drivers: Object.keys(Drivers),

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    for (var d in Drivers) {
      if (opts.driver === d) {
        return new Drivers[d](opts);
      }
    }

    return null;
  }
};
