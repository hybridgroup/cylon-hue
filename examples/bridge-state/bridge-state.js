// To run:
// $ node examples/bridge-state/bridge-state.js [bridge ip] [bridge username]

"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    hue: { adaptor: "hue", host: process.argv[2], username: process.argv[3] }
  },

  devices: {
    bridge: { driver: "hue-bridge" }
  },

  work: function(my) {
    my.bridge.getFullState(function(err, config) {
      if (err) {
        console.log(err);
      } else {
        console.log(config);
      }
    });
  }
}).start();
