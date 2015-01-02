// To run:
// $ node examples/array-blink/array-blink.js [bridge IP] [bridge username]

"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    hue: { adaptor: "hue", host: process.argv[2], username: process.argv[3] }
  },

  devices: {
    bulb1: { driver: "hue-light", lightId: 1 },
    bulb2: { driver: "hue-light", lightId: 2 },
    bulb3: { driver: "hue-light", lightId: 3 },
    bulb4: { driver: "hue-light", lightId: 4 },
    bulb5: { driver: "hue-light", lightId: 5 },
    bulb6: { driver: "hue-light", lightId: 6 }
  },

  work: function(my) {
    every((1).second(), function() {
      for (var d in my.devices) {
        my.devices[d].toggle();
      }
    });
  }
}).start();
