/*
 * cylon-hue Bridge driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Bridge = module.exports = function Bridge() {
  Bridge.__super__.constructor.apply(this, arguments);

  this.commands = {
    createUser: this.createUser,
    locateBridges: this.locateBridges,
    getFullState: this.getFullState
  };
};

Cylon.Utils.subclass(Bridge, Cylon.Driver);

Bridge.prototype.start = function(callback) {
  callback();
};

Bridge.prototype.halt = function(callback) {
  callback();
};

// users
Bridge.prototype.registeredUsers = function(callback) {
  this.connection.registeredUsers(callback);
}

Bridge.prototype.createUser = function(username, description, callback) {
  this.connection.createUser(username, description, callback);
}

Bridge.prototype.deleteUser = function(username, callback) {
  this.connection.deleteUser(username, callback);
}

// bridges
Bridge.prototype.locateBridges = function(callback) {
  this.connection.locateBridges(callback);
}

Bridge.prototype.searchForBridges = function(timeout, callback) {
  this.connection.searchForBridges(timeout, callback);
}

Bridge.prototype.config = function(callback) {
  this.connection.config(callback);
}

Bridge.prototype.getFullState = function(callback) {
  this.connection.getFullState(callback);
}

// lights
Bridge.prototype.lights = function(callback) {
  this.connection.lights(callback);
}
