describe("Checking Vehicle Constructor and prototype", function() {
  beforeEach(function() {
    this.vehicle = new Vehicle({make: "Honda", model: "Accord"});
  });

  it("sets the make and model properties when an object is passed in", function() {
    expect(this.vehicle.make).toBe("Honda");
    expect(this.vehicle.model).toBe("Accord");
  });

  it("Returns an concatenated string with make and model", function() { 
     expect(this.vehicle.toString()).toBe("Honda Accord");
     this.vehicle.make = "Hundai";
     expect(this.vehicle.toString()).toBe("Hundai Accord");
  });

  it("returns a message when it is honked",function() {
    expect(this.vehicle.toString()).toMatch(/[A-Za-z]+/);
  });

})