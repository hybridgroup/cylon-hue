// To run: node examples/hue_blink.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf

var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'hue', adaptor: 'hue', host: process.argv[2], username: process.argv[3] },
  device: {name: 'bulb', driver: 'hue-bulb', lightId: 2},

  work: function(my) {
    every((1).second(), function() {
      my.bulb.toggle();
    });
  }
}).start();
