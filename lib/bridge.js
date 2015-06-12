/*
 * cylon-hue Bridge driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Bridge = module.exports = function Bridge() {
  Bridge.__super__.constructor.apply(this, arguments);

  this.commands = {
    createUser: this.createUser,
    locateBridges: this.locateBridges,
    getFullState: this.getFullState
  };
};

Cylon.Utils.subclass(Bridge, Cylon.Driver);

/**
 * Starts the driver
 *
 * @param {Function} callback to be triggered when started
 * @return {void}
 */
Bridge.prototype.start = function(callback) {
  callback();
};

/**
 * Stops the driver
 *
 * @param {Function} callback to be triggered when halted
 * @return {void}
 */
Bridge.prototype.halt = function(callback) {
  callback();
};

/**
 * Finds all registered users.
 *
 * @param {Function} callback function to be triggered when users are found
 * @return {void}
 * @publish
 */
Bridge.prototype.registeredUsers = function(callback) {
  this.connection.registeredUsers(callback);
};

/**
 * Creates a new user
 *
 * @param {String} username preferred username
 * @param {String} description description of new User
 * @param {Function} callback function to be triggered when user is created
 * @return {void}
 * @publish
 */
Bridge.prototype.createUser = function(username, description, callback) {
  this.connection.createUser(username, description, callback);
};

/**
 * Deletes the specified user
 *
 * @param {String} username username of user to delete
 * @param {Function} callback function to be triggered when user is deleted
 * @return {void}
 * @publish
 */
Bridge.prototype.deleteUser = function(username, callback) {
  this.connection.deleteUser(username, callback);
};

/**
 * Returns info on known Hue bridges
 *
 * @param {Function} callback function to be triggered with bridge info
 * @return {void}
 * @publish
 */
Bridge.prototype.locateBridges = function(callback) {
  this.connection.locateBridges(callback);
};

/**
 * Searches for Hue bridges on the network
 *
 * @param {Number} timeout length of timeout delay
 * @param {Function} callback function to be triggered with bridge info
 * @return {void}
 * @publish
 */
Bridge.prototype.searchForBridges = function(timeout, callback) {
  this.connection.searchForBridges(timeout, callback);
};

/**
 * Obtains a summary of bridge configuration
 *
 * @param {Function} callback function to be triggered with bridge info
 * @return {void}
 * @publish
 */
Bridge.prototype.config = function(callback) {
  this.connection.config(callback);
};

/**
 * Obtains the complete status of a bridge
 *
 * @param {Function} callback function to be triggered with bridge info
 * @return {void}
 * @publish
 */
Bridge.prototype.getFullState = function(callback) {
  this.connection.getFullState(callback);
};

/**
 * Obtains all lights registered with the bridge
 *
 * @param {Function} callback function to be triggered with lights info
 * @return {void}
 * @publish
 */
Bridge.prototype.lights = function(callback) {
  this.connection.lights(callback);
};
