/*
 * cylon-hue Light driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Light = module.exports = function Light() {
  Light.__super__.constructor.apply(this, arguments);

  var extraParams = arguments[0].extraParams || {};
  this.lightId = extraParams.lightId;
  this.isOn = false;
  this.transition = 0;

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
    transition: this.transition,
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
  var state = this.lightState().on()
  this.setLightState(state);
}

Light.prototype.turnOff = function() {
  this.isOn = false;
  var state = this.lightState().off()
  this.setLightState(state);
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
  var state = this.lightState().rgb(r,g,b);
  this.setLightState(state);
}

Light.prototype.transition = function(i) {
  this.transition = i;
}

Light.prototype.setLightState = function(state) {
  state = state.transition(this.transition);
  this.connection.adaptor.setLightState(this.lightId, state);
}

Light.prototype.lightState = function() {
  return this.connection.adaptor.lightState();
}
