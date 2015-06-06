# Cylon.js For Hue

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT).

This repository contains the Cylon adaptor/drivers to connect to the [Phillips Hue lighting system](http://meethue.com). It uses the node-hue-api node module (https://github.com/peter-murray/node-hue-api) created by [@peter-murray](https://github.com/peter-murray) thank you!

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-hue.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-hue) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-hue/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-hue) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-hue/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-hue)

## How to Install

Install the module with:

    $ npm install cylon cylon-hue

## How to Use

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    hue: { adaptor: 'hue', host: '192.168.1.85', username: 'XXX' }
  },

  devices: {
    bulb: { driver: 'hue-light', lightId: 2 }
  },

  work: function(my) {
    every((1).second(), function() {
      my.bulb.toggle();
    });
  }
}).start();
```

## How to Connect

To connect cylon-hue to a Phillips Hue bridge, you will need to know which host IP address the bridge has on the local network. You can find this out by using your router, or logging into the "Meet Hue" website at [https://www.meethue.com/en-us/user/bridge](https://www.meethue.com/en-us/user/bridge) if you have linked your bridge.

You also need to either already have a user account on the bridge, or create a new account, so you can obtain the username. You can do this by using the JS file located at `examples/create_user.js`.

Lastly, you need to know the ID for each light bulb that you want to control. You can do this by using the JS file located at `examples/bridge_state.js`.

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-hue/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-hue/blob/master/RELEASES.md
).

## License

Copyright (c) 2013-2015 The Hybrid Group. Licensed under the Apache 2.0 license.
