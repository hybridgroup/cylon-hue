/*
 * cylon-hue Light driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Light = module.exports = function Light(opts) {
  Light.__super__.constructor.apply(this, arguments);

  this.lightId = opts.lightId;
  this.isOn = false;

  this.commands = {
    turnOn: this.turnOn,
    turnOff: this.turnOff,
    toggle: this.toggle,
    alert: this.alert,
    longAlert: this.longAlert,
    white: this.white,
    brightness: this.brightness,
    hsl: this.hsl,
    xy: this.xy,
    rgb: this.rgb,
    setLightState: this.setLightState,
    lightState: this.lightState
  };
};

Cylon.Utils.subclass(Light, Cylon.Driver);

Light.prototype.start = function(callback) {
  callback();
};

Light.prototype.halt = function(callback) {
  callback();
};

Light.prototype.turnOn = function() {
  this.isOn = true;
  this.setLightState({"on": true});
}

Light.prototype.turnOff = function() {
  this.isOn = false;
  this.setLightState({"on": false});
}

Light.prototype.toggle = function() {
  if (this.isOn == true) {
    this.turnOff(this.lightId);
  } else {
    this.turnOn(this.lightId);
  }
}

Light.prototype.alert = function() {
  var state = this.lightState().alert();
  this.setLightState(state);
}

Light.prototype.longAlert = function() {
  var state = this.lightState().alert(true);
  this.setLightState(lightId, state);
}

Light.prototype.white = function(colorTemp, brightPercent) {
  var state = this.lightState().white(colorTemp, brightPercent);
  this.setLightState(state);
}

Light.prototype.brightness = function(percent) {
  var state = this.lightState().brightness(percent);
  this.setLightState(state);
}

Light.prototype.hsl = function(hue, saturation, brightPercent) {
  var state = this.lightState().hsl(hue, saturation, brightPercent);
  this.setLightState(state);
}

Light.prototype.xy = function(x, y) {
  var state = this.lightState().xy(x, y);
  this.setLightState(state);
}

Light.prototype.rgb = function(r, g, b) {
  var state = this.lightState().rgb(r, g, b);
  this.setLightState(state);
}

Light.prototype.setLightState = function(state) {
  this.connection.setLightState(this.lightId, state);
}

Light.prototype.lightState = function() {
  return this.connection.lightState();
}
