/*
 * cylon-hue adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');
var hue = require("node-hue-api");

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  var extraParams = opts.extraParams || {};

  this.host = extraParams.host;
  this.username = extraParams.username;

  Adaptor.__super__.constructor.apply(this, arguments);
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ['setLightState', 'lightState', 'createUser',
                              'locateBridges', 'getFullState'];

Adaptor.prototype.connect = function(callback) {
	this.hueApi = new hue.HueApi(this.host, this.username);
  callback();
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};

Adaptor.prototype.setLightState = function(lightId, state) {
	this.hueApi.setLightState(lightId, state, function(err, lights) {
    if (err) throw err;
	});
}

Adaptor.prototype.lightState = function() {
	return hue.lightState.create();
}

Adaptor.prototype.createUser = function(username, description, callback) {
  this.hueApi.createUser(this.host, username, description, function(err, user) {
    callback(err, user);
  });
}

Adaptor.prototype.locateBridges = function(callback) {
  this.hueApi.locateBridges(function(err, result) {
    callback(err, result);
  });
}

Adaptor.prototype.getFullState = function(callback) {
  this.hueApi.getFullState(function(err, config) {
    callback(err, config);
  });
}
