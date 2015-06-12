"use strict";

var Bridge = lib("light");

describe("Cylon.Drivers.Hue.Bridge", function() {
  var driver = new Bridge({
    device: { connection: "connect" }
  });

  it("needs tests", function() {
    expect(driver).to.be.instanceOf(Bridge);
  });
});
