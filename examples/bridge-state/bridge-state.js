// To run:
// $ node examples/bridge-state/bridge-state.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf

var Cylon = require('cylon');

Cylon.robot({
  connections: {
    hue: { adaptor: 'hue', host: process.argv[2], username: process.argv[3] }
  },

  devices: {
    bridge: { driver: 'hue-bridge' }
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
