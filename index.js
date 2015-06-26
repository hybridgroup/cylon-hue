"use strict";

var Adaptor = require("./lib/adaptor");

var Drivers = {
  "hue-bridge": require("./lib/bridge"),
  "hue-light": require("./lib/light")
};

module.exports = {
  adaptors: ["hue"],
  drivers: Object.keys(Drivers),

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    opts = opts || {};

    if (Drivers[opts.driver]) {
      return new Drivers[opts.driver](opts);
    }

    return null;
  }
};
