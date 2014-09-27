# Cylon.js For Hue

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor/drivers to connect to the [Phillips Hue lighting system](http://meethue.com). It uses the node-hue-api node module (https://github.com/peter-murray/node-hue-api) created by [@peter-murray](https://github.com/peter-murray) thank you!

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

## Getting Started

Install the module with: `npm install cylon-hue`

## Examples

## Connecting

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'hue', adaptor: 'hue', host: '192.168.1.85', username: 'XXX' },
  device: {name: 'bulb', driver: 'hue-bulb', lightId: 2},

  work: function(my) {
    every((1).second(), function() {
      my.bulb.toggle();
    });
  }
}).start();
```

Explain how to connect from the computer to the device here...

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

None yet...

## License

Copyright (c) 2014 The Hybrid Group. See `LICENSE` for more details
