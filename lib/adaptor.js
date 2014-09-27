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

// Include a list of commands that will be make availble to the connection;
// which means they will be used by the drivers.
Adaptor.prototype.commands = [];

Adaptor.prototype.connect = function(callback) {
	this.hueApi = new hue.HueApi(this.host, this.username);

  Adaptor.__super__.connect.apply(this, arguments);
};

Adaptor.prototype.setLightState = function(lightId, state) {
	this.hueApi.setLightState(lightId, state, function(err, lights) {
    if (err) throw err;
	});
}

Adaptor.prototype.lightState = function() {
	return hue.lightState.create();
}
