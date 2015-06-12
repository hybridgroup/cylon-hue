/*
 * cylon-hue Light driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

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

/**
 * Starts the driver
 *
 * @param {Function} callback to be triggered when started
 * @return {void}
 */
Light.prototype.start = function(callback) {
  callback();
};

/**
 * Stops the driver
 *
 * @param {Function} callback to be triggered when halted
 * @return {void}
 */
Light.prototype.halt = function(callback) {
  callback();
};

/**
 * Turns the light on.
 *
 * Also sets `this.isOn` to `true`.
 *
 * @return {void}
 * @publish
 */
Light.prototype.turnOn = function() {
  this.isOn = true;
  this.setLightState({on: true});
};

/**
 * Turns the light off.
 *
 * Also sets `this.isOn` to `false`.
 *
 * @return {void}
 * @publish
 */
Light.prototype.turnOff = function() {
  this.isOn = false;
  this.setLightState({on: false});
};

/**
 * Toggles the light on or off
 *
 * @return {void}
 * @publish
 */
Light.prototype.toggle = function() {
  if (this.isOn === true) {
    this.turnOff(this.lightId);
  } else {
    this.turnOn(this.lightId);
  }
};

/**
 * Sets the light to an 'alert' state
 *
 * @return {void}
 * @publish
 */
Light.prototype.alert = function() {
  var state = this.lightState().alert();
  this.setLightState(state);
};

/**
 * Sets the light to a longer 'alert' state
 *
 * @return {void}
 * @publish
 */
Light.prototype.longAlert = function() {
  var state = this.lightState().alert(true);
  this.setLightState(state);
};

/**
 * Sets the light to white
 *
 * @param {Number} colorTemp the color temperature to use for "white"
 * @param {Number} brightPercent 0-100 brightness percentage to use
 * @return {void}
 * @publish
 */
Light.prototype.white = function(colorTemp, brightPercent) {
  var state = this.lightState().white(colorTemp, brightPercent);
  this.setLightState(state);
};

/**
 * Sets the light's brightness
 *
 * @param {Number} percent 0-100 brightness percentage to use
 * @return {void}
 * @publish
 */
Light.prototype.brightness = function(percent) {
  var state = this.lightState().brightness(percent);
  this.setLightState(state);
};

/**
 * Sets the light's color via HSL
 *
 * @param {Number} hue (0-359)
 * @param {Number} saturation (0-100)
 * @param {Number} brightPercent (0-100)
 * @return {void}
 * @publish
 */
Light.prototype.hsl = function(hue, saturation, brightPercent) {
  var state = this.lightState().hsl(hue, saturation, brightPercent);
  this.setLightState(state);
};

/**
 * Sets the light's color via the Philips Color coordinate system
 *
 * @param {Number} x (0-1)
 * @param {Number} y (0-1)
 * @return {void}
 * @publish
 */
Light.prototype.xy = function(x, y) {
  var state = this.lightState().xy(x, y);
  this.setLightState(state);
};

/**
 * Sets the light's color via RGB
 *
 * @param {Number} r red (0-255)
 * @param {Number} g green (0-255)
 * @param {Number} b blue (0-255)
 * @return {void}
 * @publish
 */
Light.prototype.rgb = function(r, g, b) {
  var state = this.lightState().rgb(r, g, b);
  this.setLightState(state);
};

Light.prototype.setLightState = function(state) {
  this.connection.setLightState(this.lightId, state);
};

Light.prototype.lightState = function() {
  return this.connection.lightState();
};
