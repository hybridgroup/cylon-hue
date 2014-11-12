"use strict";

var module = source("cylon-hue");

var Adaptor = source('adaptor'),
    Bridge = source('bridge'),
    Light = source('light');

describe("Cylon.Hue", function() {
  describe("#adaptors", function() {
    it('is an array of supplied adaptors', function() {
      expect(module.adaptors).to.be.eql(['hue']);
    });
  });

  describe("#drivers", function() {
    it('is an array of supplied drivers', function() {
      expect(module.drivers).to.be.eql(['hue-bridge', 'hue-light']);
    });
  });

  describe("#driver", function() {
    var opts = { device: {connection: 'test'} };

    it("can instantiate a new Bridge", function() {
      opts.driver = 'hue-bridge';
      var driver = module.driver(opts);
      expect(driver).to.be.an.instanceOf(Bridge);
    });

    it("can instantiate a new Light", function() {
      opts.driver = 'hue-light';
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
