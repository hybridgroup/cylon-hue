// To run: node examples/bridge_state.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf

var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'hue', adaptor: 'hue', host: process.argv[2], username: process.argv[3] },
  device: {name: 'bridge', driver: 'hue-bridge'},

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