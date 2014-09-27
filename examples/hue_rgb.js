var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'hue', adaptor: 'hue', host: process.argv[2], username: process.argv[3] },
  device: {name: 'bulb', driver: 'hue-bulb', lightId: 2},

  randomNumber: function() {
  	return Math.floor(Math.random() * 255);
  },

  work: function(my) {
    my.bulb.turnOn();

    every(0.5.seconds(), function() {
      my.bulb.rgb(my.randomNumber(), my.randomNumber(), my.randomNumber());
    });
  }
}).start();

