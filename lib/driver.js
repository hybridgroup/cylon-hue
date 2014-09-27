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
  this.setLightState({"on": true});
}

Driver.prototype.turnOff = function() {
  this.isOn = false;
  this.setLightState({"on": false});
}

Driver.prototype.toggle = function() {
  if (this.isOn == true) {
    this.turnOff(this.lightId);
  } else {
    this.turnOn(this.lightId);
  }
}

Driver.prototype.alert = function() {
  var state = this.lightState().alert();
  this.setLightState(state);
}

Driver.prototype.longAlert = function() {
  var state = this.lightState().alert(true);
  this.setLightState(lightId, state);
}

Driver.prototype.white = function(colorTemp, brightPercent) {
  var state = this.lightState().white(colorTemp, brightPercent);
  this.setLightState(state);
}

Driver.prototype.brightness = function(percent) {
  var state = this.lightState().brightness(percent);
  this.setLightState(state);
}

Driver.prototype.hsl = function(hue, saturation, brightPercent) {
  var state = this.lightState().hsl(hue, saturation, brightPercent);
  this.setLightState(state);
}

Driver.prototype.xy = function(x, y) {
  var state = this.lightState().xy(x, y);
  this.setLightState(state);
}

Driver.prototype.rgb = function(r, g, b) {
  var state = this.lightState().rgb(r, g, b);
  this.setLightState(state);
}

Driver.prototype.setLightState = function(state) {
  this.connection.adaptor.setLightState(this.lightId, state);
}

Driver.prototype.lightState = function() {
  return this.connection.adaptor.lightState();
}
