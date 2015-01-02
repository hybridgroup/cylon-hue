/* jshint expr:true */
"use strict";

var Light = source("light");

describe("Cylon.Drivers.Hue.Light", function() {
  var driver = new Light({
    device: { connection: "connect" }
  });

  it("needs tests", function() {
    expect(driver).to.be.instanceOf(Light);
  });
});
