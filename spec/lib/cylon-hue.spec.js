"use strict";

var hue = lib("../");

var Adaptor = lib("adaptor"),
    Bridge = lib("bridge"),
    Light = lib("light");

describe("Cylon.Hue", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(hue.adaptors).to.be.eql(["hue"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(hue.drivers).to.be.eql(["hue-bridge", "hue-light"]);
    });
  });

  describe("#driver", function() {
    var opts = { connection: {} };

    it("can instantiate a new Bridge", function() {
      opts.driver = "hue-bridge";
      var driver = hue.driver(opts);
      expect(driver).to.be.an.instanceOf(Bridge);
    });

    it("can instantiate a new Light", function() {
      opts.driver = "hue-light";
      var driver = hue.driver(opts);
      expect(driver).to.be.an.instanceOf(Light);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(hue.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
