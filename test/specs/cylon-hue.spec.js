"use strict";

var module = source("cylon-hue");

var Adaptor = source('adaptor'),
    Light = source('light');

describe("Cylon.Hue", function() {
  describe("#register", function() {
    it("should be a function", function() {
      expect(module.register).to.be.a('function');
    });
  });

  describe("#driver", function() {
    var opts = { device: {}, extraParams: {} };

    it("can instantiate a new Light", function() {
      opts.name = 'hue-light';
      var driver = module.driver(opts);
      expect(driver).to.be.an.instanceOf(Light);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(module.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
