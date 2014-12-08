// To run:
// $ node examples/create-user/create-user.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf newdescription

var Cylon = require('cylon');

Cylon.robot({
  connections: {
    hue: { adaptor: 'hue', host: process.argv[2], username: process.argv[3] }
  },

  devices: {
    bridge: { driver: 'hue-bridge' }
  },

  work: function(my) {
    my.bridge.createUser(null, process.argv[4], function(err, user) {
      console.log(err || user);
    });
  }
}).start();
