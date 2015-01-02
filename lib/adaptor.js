/*
 * cylon-hue adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");
var hue = require("node-hue-api");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);

  opts = opts || {};

  this.host = opts.host;
  this.username = opts.username;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = [
  "setLightState",
  "lightState",
  "createUser",
  "locateBridges",
  "getFullState"
];

/**
 * Connects to the Hue
 *
 * @param {Function} callback to be triggered when connected
 * @return {null}
 */
Adaptor.prototype.connect = function(callback) {
  this.hueApi = new hue.HueApi(this.host, this.username);
  callback();
};

/**
 * Disconnects from the Hue
 *
 * @param {Function} callback to be triggered when disconnected
 * @return {null}
 */
Adaptor.prototype.disconnect = function(callback) {
  callback();
};

/**
 * Sets the state of a specific Hue
 *
 * @param {Number} lightId ID of the Hue to be changed
 * @param {Object} state
 * @param {Boolean} state.on whether or not the light should be on
 * @return {null}
 * @publish
 */
Adaptor.prototype.setLightState = function(lightId, state) {
  this.hueApi.setLightState(lightId, state, function(err) {
    if (err) {
      throw err;
    }
  });
};

/**
 * Fetches the current state of the Hues
 *
 * @return {Object} lightState
 * @publish
 */
Adaptor.prototype.lightState = function() {
  return hue.lightState.create();
};

/**
 * Creates a User through the Hue API
 *
 * @param {String} username preferred username
 * @param {String} description description of User
 * @param {Function} callback to be triggered when the user is created
 * @return {null}
 * @publish
 */
Adaptor.prototype.createUser = function(username, description, callback) {
  this.hueApi.createUser(this.host, username, description, function(err, user) {
    callback(err, user);
  });
};

/**
 * Locates Hue bridges through the API
 *
 * @param {Function} callback to be triggered when the bridges are found
 * @return {null}
 * @publish
 */
Adaptor.prototype.locateBridges = function(callback) {
  this.hueApi.locateBridges(function(err, result) {
    callback(err, result);
  });
};

/**
 * Gets the full configuration state of the Hue setup
 *
 * @param {Function} callback to be triggered when config is found
 * @return {null}
 * @publish
 */
Adaptor.prototype.getFullState = function(callback) {
  this.hueApi.getFullState(function(err, config) {
    callback(err, config);
  });
};
