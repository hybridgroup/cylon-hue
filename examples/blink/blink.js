// To run:
// $ node examples/blink/blink.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf

"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    hue: { adaptor: "hue", host: process.argv[2], username: process.argv[3] }
  },

  devices: {
    bulb: { driver: "hue-light", lightId: 2 }
  },

  work: function(my) {
    every((1).second(), function() {
      my.bulb.toggle();
    });
  }
}).start();
