# Cylon.js For Hue

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor/drivers to connect to the [Phillips Hue lighting system](http://meethue.com). It uses the node-hue-api node module (https://github.com/peter-murray/node-hue-api) created by [@peter-murray](https://github.com/peter-murray) thank you!

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

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

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & lint and test your code using `make test` and `make lint`.
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History

Version 0.4.0 - Updates for compatability with Cylon 0.22.0

Version 0.3.0 - Updates for compatability with Cylon 0.21.0

Version 0.2.0 - Updates for compatability with Cylon 0.20.0

Version 0.1.0 - Initial release for ongoing development

## License

Copyright (c) 2014 The Hybrid Group. See `LICENSE` for more details
