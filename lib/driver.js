/*
 * cylon-hue driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);

  var extraParams = arguments[0].extraParams || {};
  this.lightId = extraParams.lightId;
  this.isOn = false;

  this.commands = {
    turnOn: this.turnOn,
    turnOff: this.turnOff,
    toggle: this.toggle
  };
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  Driver.__super__.start.apply(this, arguments);
};

Driver.prototype.turnOn = function() {
  this.isOn = true;
  this.connection.adaptor.turnOn(this.lightId);
}

Driver.prototype.turnOff = function() {
  this.isOn = false;
  this.connection.adaptor.turnOff(this.lightId);
}

Driver.prototype.toggle = function() {
  if (this.isOn == true) {
    this.turnOff(this.lightId);
  } else {
    this.turnOn(this.lightId);
  }
}
