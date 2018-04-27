var hw = require("../index");
 
describe("Display Hello World", function () {
 // Add 2 numbers
  it("Hello World", function () {
    var sum = hw.helloworld();
    expect(sum).toBe("Hello World");
  });
  });  