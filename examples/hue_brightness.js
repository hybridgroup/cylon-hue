var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'hue', adaptor: 'hue', host: process.argv[2], username: process.argv[3] },
  device: {name: 'bulb', driver: 'hue-bulb', lightId: 2},

  work: function(my) {
    var brightness = 0,
        fade = 5;

    my.bulb.turnOn();
    every(0.5.seconds(), function() {
      brightness += fade;
      my.bulb.brightness(brightness);
      if ((brightness === 0) || (brightness === 100)) { fade = -fade; }
    });
  }
}).start();
