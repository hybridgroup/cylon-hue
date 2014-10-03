// To run: node examples/hue-array-blink.js 192.168.1.85 35dacee025cd94cf3f50bb301ad8b4bf

var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'hue', adaptor: 'hue', host: process.argv[2], username: process.argv[3] },
  devices: [
  	{name: 'bulb1', driver: 'hue-light', lightId: 1},
  	{name: 'bulb2', driver: 'hue-light', lightId: 2},
  	{name: 'bulb3', driver: 'hue-light', lightId: 3},
  	{name: 'bulb4', driver: 'hue-light', lightId: 4},
  	{name: 'bulb5', driver: 'hue-light', lightId: 5},
  	{name: 'bulb6', driver: 'hue-light', lightId: 6}
  ],

  randomNumber: function() {
    return Math.floor(Math.random() * 255);
  },

  setRGB: function(bulb) {
    bulb.rgb(this.randomNumber(), this.randomNumber(), this.randomNumber());
  },

  work: function(my) {
    every((1).second(), function() {
      my.setRGB(my.bulb1);
      my.setRGB(my.bulb2);
      my.setRGB(my.bulb3);
      my.setRGB(my.bulb4);
      my.setRGB(my.bulb5);
      my.setRGB(my.bulb6);
    });
  }
}).start();
