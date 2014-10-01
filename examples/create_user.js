// To run: node examples/create_user.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf newdescription

var cylon = require('cylon');

cylon.robot({
  connection: { name: 'hue', adaptor: 'hue', host: process.argv[2], username: process.argv[3] },
  device: {name: 'bridge', driver: 'hue-bridge'}
})
.on('ready', function(my) {
	my.bridge.createUser(null, process.argv[4], function(err, user) {
    if (err) {
    	console.log(err);
    } else {
    	console.log(user);
    }
	});
})
.on('error', function(err) {
  console.log(err);
})
.start();
