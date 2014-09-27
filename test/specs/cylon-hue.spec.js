"use strict";

var module = source("cylon-hue");

var Adaptor = source('adaptor'),
    Bulb = source('bulb');

describe("Cylon.Hue", function() {
  describe("#register", function() {
    it("should be a function", function() {
      expect(module.register).to.be.a('function');
    });
  });

  describe("#driver", function() {
    var opts = { device: {}, extraParams: {} };

    it("can instantiate a new Bulb", function() {
      opts.name = 'hue-bulb';
      var driver = module.driver(opts);
      expect(driver).to.be.an.instanceOf(Bulb);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(module.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
